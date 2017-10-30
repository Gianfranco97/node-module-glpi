/* --------------------------------------------------------------------
*
*  LICENSE
*
*  This file is part of the GLPI API Client Library for Node.js,
*  a subproject of GLPI. GLPI is a free IT Asset Management.
*
*  GLPI is free software: you can redistribute it and/or
*  modify it under the terms of the GNU General Public License
*  as published by the Free Software Foundation; either version 3
*  of the License, or (at your option) any later version.
*
*  GLPI is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*  --------------------------------------------------------------------
*  @author    Gianfranco Manganiello - <gmanganiello@teclib.com>
*  @copyright (C) 2017 Teclib' and contributors.
*  @license   GPLv3 https://www.gnu.org/licenses/gpl-3.0.html
*  @link      https://github.com/glpi-project/node-module-glpi
*  @link      http://www.glpi-project.org/
*  -------------------------------------------------------------------- */

const HTTP = require('http')
const HTTPS = require('https')
const URL = require('url').URL
const ITEMTYPE = require('./itemtype')

/** Class of GlpiRestClient. */
class GlpiRestClient {
    /**
     * Create a client.
     * @param {string} url - The url of apirest.
     */
    constructor (url) {
        this._url = url
        this._sessionToken = ''
        this._appToken = ''
    }

    /**
     * Getter of url.
     * @return {string} - The url of apirest.
     */
    get url () {
        return this._url
    }

    /**
     * Setter of url.
     * @param  {string} url - The url of apirest.
     */
    set url (url) {
        this._url = url
    }

    /**
     * Getter of sessionToken.
     *  @return {string} - The session token of the client.
     */
    get sessionToken () {
        return this._sessionToken
    }

    /**
     * Setter of sessionToken.
     * @param  {string} sessionToken - The session token of the client.
     */
    set sessionToken (sessionToken) {
        if (sessionToken) this._sessionToken = sessionToken
    }

    /**
     * Getter of sessionToken.
     * @return {string} - The app token of the client.
     */
    get appToken () {
        return this._appToken
    }

    /**
     * Setter of sessionToken.
     * @param {string} appToken - The app token of the client.
     */
    set appToken (appToken) {
        if (appToken) this._appToken = appToken
    }

    /**
     * Function to prepare the request data.
     * @private
     * @param  {string} method - Request protocol (GET, POST, PUT ...).
     * @param  {string} endpoint - Request path.
     * @param  {object} options - Object used to pass the data on the body and/or additional headers.
     * @param  {function} responseHandler - Used to respond to the promise.
     * @return {object} - Promise resolved.
     */
    _prepareRequest (method, endpoint, options, responseHandler) {
        let requestOptions = new URL(this._url)
        requestOptions.pathname += `/${endpoint}`

        let headers = {
            'Content-Type': 'application/json',
            'Session-Token': this.sessionToken,
            'App-Token': this.appToken
        }

        let bodyString = ''

        if (options) {
            if (options.headers) headers = {...headers, ...options.headers}
            if (options['App-Token']) this.appToken = options['App-Token']
            if (options.input) {
                bodyString = JSON.stringify(options)
                headers = {...headers, 'Content-Length': bodyString.length}
            }
            if (options.profiles_id) {
                bodyString = JSON.stringify(options)
                headers = {...headers, 'Content-Length': bodyString.length}
            }
            if (options.activeEntities) {
                bodyString = JSON.stringify(options.activeEntities)
                headers = {...headers, 'Content-Length': bodyString.length}
            }
            if (options.lostPassword) {
                bodyString = JSON.stringify(options.lostPassword)
                headers = {...headers, 'Content-Length': bodyString.length}
            }
            if (options.queryString) {
                for (let obj in options.queryString) {
                    if (options.queryString[obj]) {
                        requestOptions.searchParams.append(obj, options.queryString[obj])
                    }
                }
            }
        }

        const requestData = {
            'hostname': requestOptions.hostname,
            'path': requestOptions.pathname + requestOptions.search,
            'method': method,
            'headers': headers
        }

        const protocol = requestOptions.protocol

        return this._request(requestData, bodyString, protocol, responseHandler)
    }

    /**
     * Function to make requests to the server.
     * @private
     * @param  {object} requestData - Parameters of the request (hostname, port, path, method and headers).
     * @param  {string} bodyString - Data body of the request.
     * @param  {function} responseHandler - Used to respond to the promise.
     * @return {object} - Server response.
     */
    _request (requestData, bodyString, protocol, responseHandler) {
        let req
        if (protocol === 'https:') {
            console.log(1)
            req = HTTPS.request(requestData, (resp) => {
                let data = ''

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk
                })

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    responseHandler(resp, data)
                })
            })
        } else {
            console.log(2)
            req = HTTP.request(requestData, (resp) => {
                let data = ''

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk
                })

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    responseHandler(resp, data)
                })
            })
        }

        req.on('error', () => {})
        req.write(bodyString)
        req.end()

        return req
    }

    /**
     * Returns an object used in the errors.
     * @private
     * @param  {number} status - The status of the response.
     * @param  {any} data - Body of the request.
     * @return {object} - Response that is given to the client.
     */
    _requestException (status, data) {
        return ({
            status,
            data: data
        })
    }

    /**
     * Check if a request was unsuccessful.
     * @private
     * @param  {number} status - The status of the response.
     * @param  {any} data - Body of the request.
     * @return {object} - Response that is given to the client.
     */
    _assessStatus (status, data) {
        if (status >= 400 && status < 600) {
            if (status >= 400 && status < 500) {
                try {
                    data = JSON.parse(data)
                    return this._requestException(status, [
                        data[0],
                        data[1].split(';')[0]
                    ])
                } catch (err) {
                    return this._requestException(status, [
                        'ERROR',
                        data
                    ])
                }
            }
            return this._requestException(status, data)
        }
    }

    /**
     * Validate that a variable is of the numerical type and that it is greater than zero.
     * @private
     * @param o - Variable to be evaluated.
     * @return {boolean} - Is this a valid number?.
     */
    _isNumber (o) {
        return !isNaN(o - 0) && o !== null && o !== '' && o !== false
    }

    /**
     * Login with credentials (user and password).
     * @param  {string} user - Username.
     * @param  {string} password - Password.
     * @param  {string} appToken - App token.
     * @return {object} - Response that is given to the client.
     */
    initSessionByCredentials (user, password, appToken) {
        return new Promise((resolve, reject) => {
            try {
                let options = {
                    'headers': {
                        'Authorization': 'Basic ' + Buffer.from(user + ':' + password).toString('base64')
                    }
                }
                if (appToken) {
                    options.headers = {
                        ...options.headers,
                        'App-Token': appToken
                    }
                }
                this._prepareRequest('GET', 'initSession', options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        // this.sessionToken = JSON.parse(data).session_token
                        resolve({
                            data
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Login with credentials user token
     * @param  {string} userToken - User token.
     * @param  {string} appToken - App token.
     * @return {object} - Response that is given to the client.
     */
    initSessionByUserToken (userToken, appToken) {
        return new Promise((resolve, reject) => {
            try {
                let options = {
                    'headers': {
                        'Authorization': `user_token ${userToken}`
                    }
                }
                if (appToken) {
                    options.headers = {
                        ...options.headers,
                        'App-Token': appToken
                    }
                }
                this._prepareRequest('GET', 'initSession', options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        this.sessionToken = JSON.parse(data).session_token
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Close user session
     * @return {object} - Response that is given to the client.
     */
    killSession () {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                this._prepareRequest('GET', 'killSession', null, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        this.sessionToken = ''
                        resolve({
                            status: response.statusCode,
                            data: {
                                message: 'User logout successfully'
                            }
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Get my profiles
     * @return {object} - Response that is given to the client.
     */
    getMyProfiles () {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                this._prepareRequest('GET', 'getMyProfiles', null, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data).myprofiles
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Get active profile
     * @return {object} - Response that is given to the client.
     */
    getActiveProfile () {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                this._prepareRequest('GET', 'getActiveProfile', null, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data).active_profile
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Get my entities
     * @return {object} - Response that is given to the client.
     */
    getMyEntities () {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                this._prepareRequest('GET', 'getMyEntities', null, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data).myentities
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Get active entities
     * @return {object} - Response that is given to the client.
     */
    getActiveEntities () {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                this._prepareRequest('GET', 'getActiveEntities', null, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Get full session
     * @return {object} - Response that is given to the client.
     */
    getFullSession () {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                this._prepareRequest('GET', 'getFullSession', null, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Get glpi configuration
     * @return {object} - Response that is given to the client.
     */
    getGlpiConfig () {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                this._prepareRequest('GET', 'getGlpiConfig', null, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Get all items
     * @param  {object} itemtype - Item type.
     * @param  {object} queryString - Data that goes through query string.
     * @return {object} - Response that is given to the client.
     */
    getAllItems (itemtype, queryString) {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                if (!itemtype) throw this._requestException(400, ['Error', 'Invalid itemtype'])
                if (itemtype !== ITEMTYPE[itemtype.name]) throw this._requestException(400, ['Error', 'Invalid itemtype'])
                let options = null
                if (queryString) options = { queryString }
                this._prepareRequest('GET', itemtype.name, options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Get an item
     * @param  {object} itemtype - Item type.
     * @param  {number} id - ID of the item.
     * @param  {object} queryString - Data that goes through query string.
     * @return {object} - Response that is given to the client.
     */
    getItem (itemtype, id, queryString) {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                if (!this._isNumber(id)) throw this._requestException(400, ['ERROR', 'Invalid id'])
                if (id < 0) throw this._requestException(400, ['ERROR', 'Invalid id'])
                let options = null
                if (queryString) options = { queryString }
                const endpoint = `${itemtype.name}/${id}`
                this._prepareRequest('GET', endpoint, options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Get sub items
     * @param  {object} itemtype - Item type.
     * @param  {number} id - ID of the item.
     * @param  {object} subItemtype - Sub item type.
     * @param  {object} queryString - Data that goes through query string.
     * @return {object} - Response that is given to the client.
     */
    getSubItems (itemtype, id, subItemtype, queryString) {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                if (!this._isNumber(id)) throw this._requestException(400, ['ERROR', 'Invalid id'])
                if (id < 0) throw this._requestException(400, ['ERROR', 'Invalid id'])
                let options = null
                if (queryString) options = { queryString }
                const endpoint = `${itemtype.name}/${id}/${subItemtype.name}`
                this._prepareRequest('GET', endpoint, options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Add item
     * @param  {object} itemtype - Item type.
     * @param  {object} input - Data that is passed through the body of the request.
     * @return {object} - Response that is given to the client.
     */
    addItems (itemtype, input) {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                const options = { input }
                const endpoint = itemtype.name
                this._prepareRequest('POST', endpoint, options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Delete item
     * @param  {object} itemtype - Item type.
     * @param  {number} id - ID of the item.
     * @param  {object} input - Data that is passed through the body of the request.
     * @param  {object} queryString - Data that goes through query string.
     * @return {object} - Response that is given to the client.
     */
    deleteItems (itemtype, id, input, queryString) {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                let options = {}
                if (queryString) options = { queryString }
                let endpoint = itemtype.name
                if (!id) {
                    if (!input) throw this._requestException(400, ['ERROR', 'Invalid input'])
                    options = { ...options, input }
                } else {
                    if (!this._isNumber(id)) throw this._requestException(400, ['ERROR', 'Invalid id'])
                    if (id < 0) throw this._requestException(400, ['ERROR', 'Invalid id'])
                    endpoint += `/${id}`
                }
                this._prepareRequest('DELETE', endpoint, options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Update item
     * @param  {object} itemtype - Item type.
     * @param  {number} id - ID of the item.
     * @param  {object} input - Data that is passed through the body of the request.
     * @return {object} - Response that is given to the client.
     */
    updateItems (itemtype, id, input) {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                let options = ''
                let endpoint = itemtype.name
                if (!id) {
                    if (!input) throw this._requestException(400, {errorCode: '', errorMessage: 'Invalid input'})
                    options = { input }
                } else {
                    if (!this._isNumber(id)) throw this._requestException(400, ['ERROR', 'Invalid id'])
                    if (id < 0) throw this._requestException(400, ['ERROR', 'Invalid id'])
                    endpoint += `/${id}`
                }
                this._prepareRequest('PUT', endpoint, options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Change active profile
     * @param  {number} id - ID of the profile.
     * @return {object} - Response that is given to the client.
     */
    changeActiveProfile (id) {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                if (!this._isNumber(id)) throw this._requestException(400, ['ERROR', 'Invalid id'])
                if (id < 0) throw this._requestException(400, ['ERROR', 'Invalid id'])
                const options = { 'profiles_id': id }
                this._prepareRequest('POTS', 'changeActiveProfile', options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: {'message': 'Active profile successfully changed'}
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Change active entities
     * @param  {number} entitiesId - ID of the entities.
     * @param  {boolean} isRecursive - Is recursive?.
     * @return {object} - Response that is given to the client.
     */
    changeActiveEntities (entitiesId, isRecursive) {
        return new Promise((resolve, reject) => {
            try {
                if (!this.sessionToken) throw this._requestException(400, ['ERROR_SESSION_TOKEN_MISSING', 'parameter session_token is missing or empty'])
                let options = {'activeEntities': {}}
                if (entitiesId) {
                    if (!this._isNumber(entitiesId)) throw this._requestException(400, ['ERROR', 'Invalid entities_id'])
                    if (entitiesId < 0) throw this._requestException(400, ['ERROR', 'Invalid entities_id'])
                    options = {'activeEntities': entitiesId}
                }
                if (isRecursive) {
                    if (typeof (isRecursive) === 'boolean') {
                        options = {'activeEntities': {...options.activeEntities, is_recursive: isRecursive}}
                    } else {
                        throw this._requestException(400, ['ERROR', 'Invalid is_recursive'])
                    }
                }
                this._prepareRequest('POTS', 'changeActiveEntities', options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        if (data) {
                            resolve({
                                status: response.statusCode,
                                data: {'message': 'Active entities successfully changed'}
                            })
                        } else {
                            resolve({
                                status: response.statusCode,
                                data: {'message': 'Failed to change active entities'}
                            })
                        }
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Request mail for password recovery
     * @param  {string} email - Email of the user.
     * @return {object} - Response that is given to the client.
     */
    recoveryPassword (email) {
        return new Promise((resolve, reject) => {
            try {
                let options = {'lostPassword': {}}
                if (email) {
                    options.lostPassword = { 'email': email }
                }
                this._prepareRequest('PUT', 'lostPassword', options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)[0]
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    /**
     * Request mail for password recovery
     * @param  {string} email - Email of the user.
     * @param  {string} passwordForgetToken - Token received in the mail.
     * @param  {string} password - New Password.
     * @return {object} - Response that is given to the client.
     */
    resetPassword (email, passwordForgetToken, password) {
        return new Promise((resolve, reject) => {
            try {
                const options = {
                    'lostPassword': {
                        'email': email,
                        'password_forget_token': passwordForgetToken,
                        'password': password
                    }
                }
                this._prepareRequest('PUT', 'lostPassword', options, (response, data) => {
                    const error = this._assessStatus(response.statusCode, data)
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            status: response.statusCode,
                            data: JSON.parse(data)[0]
                        })
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

module.exports = GlpiRestClient

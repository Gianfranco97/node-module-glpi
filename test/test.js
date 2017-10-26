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

const lint = require('mocha-eslint')
const sinon = require('sinon')
const sinonTestFactory = require('sinon-test')
const sinonTest = sinonTestFactory(sinon)

const GlpiRestClient = require('../lib/restclient')
const config = require('../config.example.json')
const itemtype = require('../lib/itemtype')

const paths = [
    'test',
    'lib',
    'examples'
]

const optionsLint = require('../.eslintrc')

lint(paths, optionsLint)

describe('initSessionByCredentials()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/initSession',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': '',
                'App-Token': '',
                Authorization: 'Basic ZXhhbXBsZU5hbWU6ZXhhbXBsZVBhc3N3b3Jk'
            }
        }
        const bodyString = ''
        client.initSessionByCredentials('exampleName', 'examplePassword')
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('initSessionByUserToken()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/initSession',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': '',
                'App-Token': '',
                Authorization: 'user_token exampleUserToken'
            }
        }
        const bodyString = ''
        client.initSessionByUserToken('exampleUserToken')
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('killSession()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/killSession',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.killSession()
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('getMyProfiles()', function () {
    it('get my profiles successfully', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/getMyProfiles',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.getMyProfiles()
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('getActiveProfile()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/getActiveProfile',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.getActiveProfile()
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('getMyEntities()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/getMyEntities',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.getMyEntities()
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('getActiveEntities()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/getActiveEntities',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.getActiveEntities()
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('getFullSession()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/getFullSession',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.getFullSession()
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('getGlpiConfig()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/getGlpiConfig',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.getGlpiConfig()
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('getAllItems()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/User',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.getAllItems(itemtype.User)
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('getAnItem()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/User/2',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.getAnItem(itemtype.User, 2)
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('getSubItems()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/User/40/UserEmail',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': ''
            }
        }
        const bodyString = ''

        client.sessionToken = 'exampleUserToken'
        client.getSubItems(itemtype.User, 40, itemtype.UserEmail)
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})

describe('addItem()', function () {
    it('correct data sent to the request', sinonTest(() => {
        const client = new GlpiRestClient(config.apirest)
        const stub = sinon.stub(client, '_request')

        const requestData = {
            hostname: 'dev.flyve.org',
            port: 443,
            path: '/glpi/apirest.php/UserEmail',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Session-Token': 'exampleUserToken',
                'App-Token': '',
                'Content-Length': 53
            }
        }
        const bodyString = '{"input":{"users_id":40,"email":"example@email.com"}}'

        client.sessionToken = 'exampleUserToken'
        client.addItem(itemtype.UserEmail, {users_id: 40, email: 'example@email.com'})
        sinon.assert.calledWith(stub, requestData, bodyString)
    }))
})


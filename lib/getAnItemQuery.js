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
module.exports = class getAnItemQuery {
    constructor () {
        this._QueryObject = {
            url: null,
            id: null,
            expand_dropdowns: null,
            get_hateoas: null,
            get_sha1: null,
            with_devices: null,
            with_disks: null,
            with_softwares: null,
            with_connections: null,
            with_networkports: null,
            with_infocoms: null,
            with_contracts: null,
            with_documents: null,
            with_tickets: null,
            with_problems: null,
            with_changes: null,
            with_notes: null,
            with_logs: null
        }
    }

    get id () {
        return this._QueryObject.id
    }
    get expand_dropdowns () {
        return this._QueryObject.expand_dropdowns
    }
    get get_hateoas () {
        return this._QueryObject.get_hateoas
    }
    get get_sha1 () {
        return this._QueryObject.get_sha1
    }
    get with_devices () {
        return this._QueryObject.with_devices
    }
    get with_disks () {
        return this._QueryObject.with_disks
    }
    get with_softwares () {
        return this._QueryObject.with_softwares
    }
    get with_connections () {
        return this._QueryObject.with_connections
    }
    get with_networkports () {
        return this._QueryObject.with_networkports
    }
    get with_infocoms () {
        return this._QueryObject.with_infocoms
    }
    get with_contracts () {
        return this._QueryObject.with_contracts
    }
    get with_documents () {
        return this._QueryObject.with_documents
    }
    get with_tickets () {
        return this._QueryObject.with_tickets
    }
    get with_problems () {
        return this._QueryObject.with_problems
    }
    get with_changes () {
        return this._QueryObject.with_changes
    }
    get with_notes () {
        return this._QueryObject.with_notes
    }
    get with_logs () {
        return this._QueryObject.with_logs
    }

    set id (id) {
        this._QueryObject.id = id
    }
    set expand_dropdowns (expand_dropdowns) {
        this._QueryObject.expand_dropdowns = expand_dropdowns
    }
    set get_hateoas (get_hateoas) {
        this._QueryObject.get_hateoas = get_hateoas
    }
    set get_sha1 (get_sha1) {
        this._QueryObject.get_sha1 = get_sha1
    }
    set with_devices (with_devices) {
        this._QueryObject.with_devices = with_devices
    }
    set with_disks (with_disks) {
        this._QueryObject.with_disks = with_disks
    }
    set with_softwares (with_softwares) {
        this._QueryObject.with_softwares = with_softwares
    }
    set with_connections (with_connections) {
        this._QueryObject.with_connections = with_connections
    }
    set with_networkports (with_networkports) {
        this._QueryObject.with_networkports = with_networkports
    }
    set with_infocoms (with_infocoms) {
        this._QueryObject.with_infocoms = with_infocoms
    }
    set with_contracts (with_contracts) {
        this._QueryObject.with_contracts = with_contracts
    }
    set with_documents (with_documents) {
        this._QueryObject.with_documents = with_documents
    }
    set with_tickets (with_tickets) {
        this._QueryObject.with_tickets = with_tickets
    }
    set with_problems (with_problems) {
        this._QueryObject.with_problems = with_problems
    }
    set with_changes (with_changes) {
        this._QueryObject.with_changes = with_changes
    }
    set with_notes (with_notes) {
        this._QueryObject.with_notes = with_notes
    }
    set with_logs (with_logs) {
        this._QueryObject.with_logs = with_logs
    }

    createQueryObject () {
        let queryObject = {}
        for (let obj in this._QueryObject) {
            if (this._QueryObject[obj]) {
                queryObject = { ...queryObject, [obj]: this._QueryObject[obj] }
            }
        }
        return queryObject
    }
}

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
module.exports = class getSubItemsQuery {
    constructor () {
        this._QueryObject = {
            id: null,
            expand_dropdowns: null,
            get_hateoas: null,
            only_id: null,
            range: null,
            sort: null,
            order: null
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
    get only_id () {
        return this._QueryObject.only_id
    }
    get range () {
        return this._QueryObject.range
    }
    get sort () {
        return this._QueryObject.sort
    }
    get order () {
        return this._QueryObject.order
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
    set only_id (only_id) {
        this._QueryObject.only_id = only_id
    }
    set range (range) {
        this._QueryObject.range = range
    }
    set sort (sort) {
        this._QueryObject.sort = sort
    }
    set order (order) {
        this._QueryObject.order = order
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

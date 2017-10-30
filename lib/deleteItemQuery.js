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
module.exports = class deleteItemsQuery {
    constructor () {
        this._QueryObject = {
            id: null,
            force_purge: null,
            history: null
        }
    }

    get id () {
        return this._QueryObject.id
    }
    get force_purge () {
        return this._QueryObject.force_purge
    }
    get history () {
        return this._QueryObject.history
    }

    set id (id) {
        this._QueryObject.id = id
    }
    set force_purge (force_purge) {
        this._QueryObject.force_purge = force_purge
    }
    set history (history) {
        this._QueryObject.history = history
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

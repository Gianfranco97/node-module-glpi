const GlpiRestClient = require('../lib/restclient')
const config = require('../config.json')
const itemtype = require('../lib/itemtype')

const client = new GlpiRestClient(config.apirest)

client.initSessionByCredentials(config.user.name, config.user.password, config.appToken)
	.then((res) => {
		client.getSubItems(itemtype.User, 42, itemtype.UserEmail)
			.then((res2) => {
				console.log(res2)
			})
			.catch((err2) => {
				console.log(err2)
			})
	})
	.catch((err) => {
		console.log(err)
	})
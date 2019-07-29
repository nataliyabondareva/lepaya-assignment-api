const { send } = require("micro")
const query = require("micro-query")
const cors = require('micro-cors')()

module.exports = cors((req, res) => {
	const queryParams = query(req)
	const result = new Set;
	const result = Array(parseInt(queryParams.numberRequired, 10))
		.fill(0)
		.map(() => Math.ceil(Math.random() * queryParams.max))
	send(res, 200, result)
})

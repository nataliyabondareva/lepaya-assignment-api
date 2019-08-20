const { send } = require('micro')
const query = require('micro-query')
const cors = require('micro-cors')()

module.exports = cors((req, res) => {
	const queryParams = query(req)
	const result = new Set()
  while (result.size < queryParams.numberRequired) {
    result.add(Math.ceil(Math.random() * queryParams.max));
	}
	send(res, 200, Array.from(result))
});
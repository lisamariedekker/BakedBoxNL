const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

const username = 'c057772e466827b469d08a3a47a9d8f3'
const password = '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'

const usernamePasswordBuffer = Buffer.from(`${username}:${password}`)
const base64data = usernamePasswordBuffer.toString('base64')

const HTTP = axios.create({
  baseURL: `https://bakedboxnl.myshopify.com/admin/api/2022-07/`,
  headers: {
    'Authorization': `Basic ${base64data}`,
}
})

app.get('/', (req, res) => {
  let result
  HTTP.get(`products.json`)
    .then(response => {
      result = response.data
      res.send(result)
    })
    .catch(e => {
      console.error(e)
    })
})

app.get('/product', (req, res) => {
  HTTP.get(`products/`+ req.query.id +`.json`)
    .then(response => {
      const result = response.data
      res.send(result)
    })
    .catch(e => {
      console.error(e)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
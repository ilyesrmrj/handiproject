const path = require('path')
const express = require('express')
const app = express()
const connection = require('./config/config')

app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/user/me', () => {
  connection.query('SELECT * FROM users', [], (err, res) => {
    if (err) throw err
    return res
  })
})

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})

const express = require('express')
const { isUnix, isNatural, toNatural, toUnix } = require('./time')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:timestamp', (req, res) => {
  const { timestamp } = req.params

  if (isUnix(timestamp)) {
    res.json({unix: timestamp, natural: toNatural(timestamp)})
  }
  else if (isNatural(timestamp)) {
    res.json({ unix: toUnix(timestamp), natural: timestamp })
  }
  else {
    res.json({unix: null, natural: null})
  }
})

const port = process.env.PORT || 4567
app.listen(port, () => console.log(`Listening on port ${port}`))
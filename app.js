const express = require('express');

const app = express();

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`application listening on port ${port}`)
})


app.get('/', (req, res) => {
  return res.send('!!!! welcome to the home page')
})

app.get('/home', (req, res) => {
 return res.send('welcome to the home page of this application')
});

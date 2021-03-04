import express from 'express'

const app = express();

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`application listening on port ${port}`)
})


app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: "!!! welcome to deploying express to aws elastic beanstalk ci/cd"
  })
})

app.get('/home', (req, res) => {
 return res.send('welcome to the home page of this application')
});


export default app;
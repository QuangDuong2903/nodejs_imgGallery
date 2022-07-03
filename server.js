const express = require('express')

const app = express()

const port = 3000

var bodyParser = require('body-parser')

var loginRouter = require('./routers/Login')

var signupRouter = require('./routers/SignUp')

var userRouter = require('./routers/User')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.use('/login', loginRouter)

app.use('/signup', signupRouter)

app.use('/user', userRouter)

app.set("view engine","ejs")

app.set("views","./views")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
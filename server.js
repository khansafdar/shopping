const express = require('express')
const path=require('path')
const session =  require('express-session')
const passport = require('./passport')
const {
  db
} = require('./db')


const app = express()

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
  secret: 'em2b462m4hb6v2j4hv5 23n4jv',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())

app.use(passport.session())

app.use('/login', (require('./routes/login').route))
app.use('/signup', (require('./routes/signup').route))
app.use('/profile', (require('./routes/profile').route))


app.use('/',express.static(path.join(__dirname, 'public')))

app.use('/api',require('./routes/api').route)

app.get('/', (req, res)  => {
  if (!req.user) {
    return res.redirect('/login')
  }
  res.redirect('/profile')
})

db.sync()
  .then(() => {
    app.listen(8877, () => {
      console.log('Started on http://localhost:8877')
    })
  })
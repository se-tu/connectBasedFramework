const http = require('http')
const userRoutes = require('./user-routes')
const adminRoutes = require('./admin-routes')
const path = require('path');

const myframe = require('./myframe')

const app = myframe();

app.set('views', path.join(__dirname, '/views'));
app.set('actionHelpers', path.join(__dirname, '/util/actionHelpers'));
app.set('viewHelpers', path.join(__dirname, '/util/viewHelpers'));

app.use('/user', userRoutes.handler)
app.use('/admin', adminRoutes.handler)

app.use(function (req, res) {
  res.render('errors/404', { info: ' /** very important information'})
})

http.createServer(app).listen(3000)
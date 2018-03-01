const router = require('./myframe/router')();

router.get('/user', (req, res, next) => {
  res.end('get user from user')
})
router.post('/user', (req, res, next) => {
  res.end('post user from user')
})
router.put('/user', (req, res, next) => {
  res.end('put user from user')
})
router.get('/data', (req, res, next) => {
  res.end('get data from user')
})

module.exports = router;
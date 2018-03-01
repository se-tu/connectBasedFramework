const router2 = require('./myframe/router')();

router2.get('/admin', (req, res) => {
  console.log(router2.helpers.getRandomsValue())
  res.end('get user from admin')
})

router2.post('/admin', (req, res)  => {
  res.end('post user from admin')
})

router2.put('/admin/:v', (req, res)  => {
  res.end('put user from admin')
})

router2.get('/:id', (req, res)  => {
  res.end('get admin from admin')
})


module.exports = router2;
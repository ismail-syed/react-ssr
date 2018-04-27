const path = require('path')
const app = require('express')()

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {

}

app.listen(3000, () => {
  console.log('==> server is running on 3000');
})
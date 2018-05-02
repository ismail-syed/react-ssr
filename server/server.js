const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  
} else {

}


app.listen(3000, function(){
 console.log('🎉-- server is running on 3000');
})
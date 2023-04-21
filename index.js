const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('CR7 VK18')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)

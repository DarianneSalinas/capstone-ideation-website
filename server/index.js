const express = require('express')
const app = express()
const cors = require('cors')
var PORT = 3000

app.use(express.json())
app.use(cors())


app.get('/', function (req, res) {
    console.log(req.originalUrl)
    res.send()
})


//destructure and add to this
// const {getUser, createUser, deleteUser} = require('./controller')
// app.get('', );
// app.post('', );
// app.delete('', );

// app.listen(4040, () => console.log('Server running on 4004'))
app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT)
})
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/api/greeting',(req,res)=>{
    res.json('Hello Vue I\'m node js')
})

const port = 3001
app.listen(port,()=>console.log(`app is running on port${port}`))
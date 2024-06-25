import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)

})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)
/* 
 1) tipo de rota/método HTTP
 2) endereço

 username - gabriel
 senha - 2z02yCIU38YNn7VL
*/
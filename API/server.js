import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/users', async (req, res) => {

    await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }

    })

    res.status(201).json(req.body)

})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.listen(3001)
/* 
 1) tipo de rota/método HTTP
 2) endereço

 username - gabriel
 senha - 2z02yCIU38YNn7VL
*/
import express from 'express'
import OpenAi from "openai"
import { Messages } from 'openai/resources/chat/completions.mjs'

const app = express
app.use(express.json)

const openai = new OpenAI({
    apiKey:"",
    baseURL:"",
    dangerouslyAllowBrowser:true
})

const messages = [
    {
        role:"system",
        content:`you are translator app
        remove all extra text`
    }
]



const response = await openai.chat.completions.create({
    model:"",
    messages
})



// response.choices[0].message.content
const PORT = 3000
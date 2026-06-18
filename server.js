import express, { text } from 'express'
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
        content:`You are a literal translation tool.
         Translate the user's text into the requested language.
          Output ONLY the raw translated text.
           Do not include introductions, explanations, punctuation changes, quotation marks, or notes. 
           If you cannot translate it, output nothing.`
    }
]

app.post("/api/translate", async (req, res) => {
  try{
   const prompt = {text,lang} = req.body
  messages.push({
    role:"user",
    content:`text:${text}
    language:${lang}`
  })
  const response = await openai.chat.completions.create({
    model:process.env.AI_MODEL,
    messages,
    // tools: [{ type: "web_search" }]
  })
    const translatedText = {translated:response.choices[0].message.content}
  await res.json(translatedText)

  }catch{
  res.status(501).json({ error: "Not implemented" });
  }
});






// response.choices[0].message.content
const PORT = 3000
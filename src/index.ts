import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/ping', (c) => {
  return c.text('pong: Hello, World')
})
app.get("/platform", (context) => {
  return context.json({
    
    platform: process.platform,
  }, 200);
});
app.get("/generate", (context) => {
  const randomNumber = Math.floor(Math.random() * 1000); // Generates a random number between 0 and 999
  return context.json({ randomNumber }, 200);
});
serve({
  fetch: app.fetch,
  port: 3000

}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

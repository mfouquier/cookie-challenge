import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3333;
app.use(express.json());
app.use(cookieParser());

app.get('/login', (req, res) => {
  res.cookie('name', 'Matt').send("I am the Cookie Monster")
})

app.get('/hello', (req, res) => {
  res.send(`Welcome ${req.cookies.name}!!!`)
})

app.listen(port, () => {
  console.log(`Cookie app listening at http://localhost:${port}`)
})
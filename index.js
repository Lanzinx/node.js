const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Meu site tá bão")
})

app.post('/api/soma', (req, res) => {
  const { n1, n2 } = req.body;

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ message: 'Digite um número.' });
  }

  const resultado = Number(n1) + Number(n2);
  res.status(200).json({ message: `resultado: ${resultado}` });
})

app.post('/api/subtracao', (req, res) => {
  const { n1, n2 } = req.body;

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ message: 'Digite um número.' });
  }

  const resultado = Number(n1) - Number(n2);
  res.status(200).json({ message: `resultado: ${resultado}` });
})

app.post('/api/multiplicacao', (req, res) => {
  const { n1, n2 } = req.body;

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ message: 'Digite um número.' });
  }

  const resultado = Number(n1) * Number(n2);
  res.status(200).json({ message: `resultado: ${resultado}` });
})

app.post('/api/divisao', (req, res) => {
  const { n1, n2 } = req.body;

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ message: 'Digite um número.' });
  }

  const resultado = Number(n1) / Number(n2);
  res.status(200).json({ message: `resultado: ${resultado}` });
})

app.listen(port, () => {
  console.log('pai ta on na porta ' + port)
})

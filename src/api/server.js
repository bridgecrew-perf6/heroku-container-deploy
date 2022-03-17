const app = require('./app');

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

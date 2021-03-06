const express = require('express');
const Author = require('./models/author');
const Books = require('./models/book');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findById(id);

  if (authors.length === 0) return res.status(404).json({ message: 'Author não encontrado' })

  res.status(200).json(authors);
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(id);

  if (books.length === 0) return res.status(404).json({ message: 'Livro não encontrado' })
  
  res.status(200).json(books);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  const validatedAuthot = await Author.findById(author_id)
  if (Books.isValid(title, author_id) && validatedAuthot.length > 0) {
    await Books.create(title, author_id);
    return res.status(200).json({ message: 'Livro criado com sucesso!' });
  }
  res.status(400).json({ message: 'Dados inválidos' });
});


app.listen(PORT, () => {
  console.log(`Ouvindo na porta 3001 ${PORT}`);
});
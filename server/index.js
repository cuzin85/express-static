import express from 'express';
import {router as contactsRouter} from './routes/contacts'
import {nav, gallery} from './data'

const app = express();

const port = 8099;

app.use(express.static('public'));
app.use('/contacts', contactsRouter);

app.set('views', './src/views');
app.set('view engine', '.ejs');

app.get('/', (req, res) => {
  res.render('index', {title: "Hello from View!", nav, gallery});
});

app.get('/books', (req, res) => {
  res.send('Books');
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`running on port ${port}`);
});
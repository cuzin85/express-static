import express from 'express';
import {router as mainRouter} from './routes/main'
import {router as contactsRouter} from './routes/contacts'
import {router as portfolioRouter} from './routes/portfolio'
import {router as aboutRouter} from './routes/about'
import {nav, gallery} from './data'
import {shuffleGallery} from './controllers/shuffle'

const app = express();

const port = 8099;

app.use(express.static('public'));
app.use('/', mainRouter);
app.use('/contacts', contactsRouter);
app.use('/portfolio', portfolioRouter);
app.use('/about', aboutRouter);

app.set('views', './src/views');
app.set('view engine', '.ejs');

/*app.get('/', (req, res) => {
  res.render('index', {title: "Hello from View!", nav, gallery, shuffleGallery});
});*/


app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`running on port ${port}`);
});
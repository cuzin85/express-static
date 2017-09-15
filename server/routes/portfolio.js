import express from 'express';
import {nav, gallery} from './../data'
import shuffle from './../controllers/shuffle'

export const router = express.Router();

router.route('/')
  .get((req, res) => {
    shuffle(gallery.images);
    res.render('portfolio', {nav, gallery, activeLink: nav[1].link});
  });

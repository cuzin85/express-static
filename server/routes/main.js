import express from 'express';
import {nav} from '../data';

export const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.render('main', {nav, activeLink: nav[0].link});
  });

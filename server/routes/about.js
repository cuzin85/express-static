import express from 'express';
import {nav} from '../data';

export const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.render('about', {nav, activeLink: nav[2].link});
  });

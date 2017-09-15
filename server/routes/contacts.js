import express from 'express';
import {nav} from '../data';

export const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.render('contacts', {nav, activeLink: nav[3].link});
  });

router.route('/some')
  .get((req, res) => {
    res.send("Something fancy!");
  });

router.route('/some/:id')
  .get((req, res) => {
    res.send(`Something fancy! ${req.params.id}`);
  });
import express from 'express';

export const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.render('contacts');
  });

router.route('/some')
  .get((req, res) => {
    res.send("Something fancy!");
  });

router.route('/some/:id')
  .get((req, res) => {
    res.send(`Something fancy! ${req.params.id}`);
  });
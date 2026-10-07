const express = require('express');
const router = express.Router();
const { getExpenses, addExpense, deleteExpense } = require('../controllers/transactionCtlr');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getExpenses)
  .post(protect, addExpense);

router.route('/:id')
  .delete(protect, deleteExpense);

module.exports = router;
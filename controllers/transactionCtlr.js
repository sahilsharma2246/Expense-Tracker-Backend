const Transaction = require('../models/transactionModel');

// @route GET /api/trans
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Transaction.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/trans
exports.addExpense = async (req, res) => {
  const { title, amount, type, category, date } = req.body;

  try {
    if (!title || !amount || !category || !date) {
      return res.status(400).json({ message: 'Please add all required fields' });
    }

    const expense = await Transaction.create({
      user: req.user._id,
      title,
      amount,
      type: type || 'expense',
      category,
      date
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/trans/:id
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Transaction.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized to delete this transaction' });
    }

    await expense.deleteOne();
    res.json({ id: req.params.id, message: 'Transaction removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
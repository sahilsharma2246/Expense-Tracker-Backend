const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please add a title']
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount']
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    default: 'expense'
  },
  category: {
    type: String,
    required: [true, 'Please select a category']
  },
  date: {
    type: String,
    required: [true, 'Please select a date']
  }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
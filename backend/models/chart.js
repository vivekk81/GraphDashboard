const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "Please enter chart type"],
        trim: true,
        maxLength: [100, "Chart type cannot exceed 100 characters"]
    },
    elements: [
      {
        type: Number,
        required: true
      }
    ]
})

module.exports = mongoose.model('Chart', chartSchema);
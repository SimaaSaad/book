const mongoose = require("mongoose");



const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true },
  description: { type: String, required: true },
  nbPages: { type: Number, required: false },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: false }],
  language: { type: String, required: true },
  genres: [{ type: String, required: false }],
  keywords: [{ type: String, required: false }],
});
module.exports = mongoose.model("Book", bookSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const genresSchema = new Schema({
  nameGenres: { type: String, maxLength: 30 },
  description: { type: String, maxLength: 300 },
});

module.exports = mongoose.model("Genres", genresSchema);

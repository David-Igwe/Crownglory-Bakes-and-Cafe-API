function connectDB() {
  const path = require("path");
  if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: path.resolve(__dirname, '..', '.env') });
  }

  const mongoose = require("mongoose");
  const dbUrl = process.env.DB_URL;
  mongoose.connect(dbUrl);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Connection error"));
  db.once("open", () => {
    console.log("Database connected");
  });
}

module.exports = connectDB;

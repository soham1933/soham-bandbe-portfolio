const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sohambandbe:soham1732@soham.toooher.mongodb.net/?retryWrites=true&w=majority&appName=soham', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to database!");
}
)
;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;

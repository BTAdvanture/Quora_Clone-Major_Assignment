const mongoose = require("mongoose");

// const uri = process.env.SECRET_KEY;
const url = 'mongodb+srv://Harshal:Harshal098@mongodbtutorial.ftgwqxl.mongodb.net/Quora_Clone?retryWrites=true&w=majority';

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
const mongoose = require("mongoose");
const dbURI = "mongodb://localhost:27017/paw2-si5c";

mongoose.connect(dbURI, {});
mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected ${dbURI}`);
});
mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error", err);
});
mongoose.connection.on("Disconnected", () => {
    console.log("Mongoose disconnected");
});
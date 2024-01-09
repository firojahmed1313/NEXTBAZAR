import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.Connection.readystate >= 1) {
    console.log("alredy dbconnect");
    return;
  }

  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  /*mongoose.Connection.on("connected", () => {
    console.log("database connect");
  });
  mongoose.Connection.on("error", (err) => {
    console.log("error in database connect", err);
  });*/
  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "Connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
    // Your code here
  });
};

export default dbConnect;

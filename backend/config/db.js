import mongoose from "mongoose";

//Connecting to Database
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected at host: ${con.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.messsage}`);
    process.exit();
  }
};

export default connectDB;

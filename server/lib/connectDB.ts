import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ooo4k.mongodb.net/bookitu?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri);
    console.log('Connected to Beautycutie database');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

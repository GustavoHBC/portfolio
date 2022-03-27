import mongoose from 'mongoose';

// TODO: remove any types
// import { NextRequest, NextResponse } from 'next/server';
const connectDB = (handler: any) => async (req: any, res: any) => {
  const DB_CONN_STRING = process.env.DB_CONN_STRING;

  if (!DB_CONN_STRING) {
    throw new Error('DB_CONN_STRING must be defined');
  }

  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(DB_CONN_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true
  });
  return handler(req, res);
};

export default connectDB;

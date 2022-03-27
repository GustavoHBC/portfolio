import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

type THandler = (req: NextRequest, res: NextResponse) => void;

const connectDB = (handler: THandler) => async (req: NextRequest, res: NextResponse) => {
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

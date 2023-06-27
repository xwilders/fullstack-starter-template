import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  createdAt: Date;
  updatedAt: Date;
  email: string;
  role: string;
  password: string;
}

const UserSchema = new Schema<IUser>(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      maxlength: 255,
    },
    role: {
      type: String,
      required: true,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      maxlength: 255,
    },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  }
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;

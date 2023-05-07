import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: [6, 'Password too short'],
  },
});

export const User = mongoose.models.User || mongoose.model('User', schema);
//export const User = mongoose.model('User', schema);

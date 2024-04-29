import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
    unique: true,
  },
  subscribedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});


const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User

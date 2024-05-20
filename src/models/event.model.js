import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  user:{
    type: String
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  timing: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
  },
  venue: {
    type: String,
  },
  type: {
    type: String,
  },
  participants: [{ type: String }],
  fee:{
    type: String
  }
});


const Event = mongoose.models.Event || mongoose.model('Event', eventSchema)

export default Event

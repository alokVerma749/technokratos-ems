import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
})


const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema)

export default Feedback

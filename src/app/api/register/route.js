import connectToDatabase from "../../../../config/mongodb"
import User from "@/models/user.models";

export async function POST(request) {
  try {
    const { name, email, password, branch, roll, payment, year } = await request.json();

    await connectToDatabase();

    const existingUser = await User.findOne({ email }).exec()

    if (existingUser) {
      return Response.json({ success: false, message: 'user already exist' })
    }

    const newEntry = new User({ name, email, password, branch, roll, payment, year })

    try {
      await newEntry.save()

      return Response.json({ success: true, message: 'user registered successfully' })
    } catch (saveError) {
      console.log(saveError)
      return Response.json({ success: false, message: 'Error saving entry' })
    }

  } catch (error) {
    return Response.json({ success: false, error: error.message })
  }
}

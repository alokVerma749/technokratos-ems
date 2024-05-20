import connectToDatabase from "../../../../config/mongodb";
import Member from "@/models/member.model";
export async function POST(request) {
  try {
    const { name, course, branch, year, email } = await request.json();

    await connectToDatabase();

    const existingMember = await Member.findOne({ email }).exec();
    if (existingMember) {
      return Response.json({ success: false, message: "user already exist" });
    }
    const newEntry = new Member({ name, course, branch, year, email });

    try {
      await newEntry.save();

      return Response.json({
        success: true,
        message: "Member registered successfully",
      });
    } catch (error) {
      console.log(saveError);
      return Response.json({ success: false, message: "Error saving entry" });
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

import connectToDatabase from "../../../../config/mongodb";
import Member from "@/models/member.model";

export async function POST(request) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Perform the database query
    const memberStr = await Member.find({}).select("memberString _id");

    // Return the response with the members data
    return new Response(JSON.stringify(memberStr), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Return the response with the error message
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

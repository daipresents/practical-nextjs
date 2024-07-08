import { NextRequest, NextResponse } from "next/server";

// Route handler
export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

export async function POST(request: NextRequest) {
  // ステータスコードの設定
  // if (!session) {
  //   retrun new NextResponse.json({message: "unauthorized"}, {status: 401});
  // }
  return NextResponse.json({ liked: true});
}

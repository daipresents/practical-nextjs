import { NextRequest, NextResponse } from "next/server";

// Segment Config OptionsでRouteレンダリングを強制
//export const dynamic = "force-dynamic";

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

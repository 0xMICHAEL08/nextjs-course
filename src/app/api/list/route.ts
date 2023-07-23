import { NextResponse } from "next/server";

export const GET = (req: Request) => {
  const { searchParams } = new URL(req.url); // 处理 URL 中的查询参数

  return NextResponse.json({
    success: "true",
    errorMessage: "获取数据成功",
    // fromEntries 方法将key-value数据转换为普通JS对象
    data: Object.fromEntries(searchParams),
  });
};

export const POST = async (req: Request) => {
  const data = await req.json();
  return NextResponse.json({
    success: "true",
    errorMessage: "新增数据成功",
    data,
  });
};

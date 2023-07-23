/* Dynamic Route Segments */

import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
  return NextResponse.json({
    success: "true",
    errorMessage: "修改数据成功",
    data: {},
  });
};

export const DELETE = async (req: Request, { params }: any) => {
  console.log(params);

  return NextResponse.json({
    success: "true",
    errorMessage: "删除数据成功",
    data: {},
  });
};

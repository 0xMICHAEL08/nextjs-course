/* 文件名以下划线_开头，NEXT.JS不会将其自动解析为路由 */
"use client";
import { useParams, useSearchParams } from "next/navigation";

const DetailData = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  return (
    <div>
      DetailData---{id}
      <p>{searchParams.get("name")}</p>
    </div>
  );
};

export default DetailData;

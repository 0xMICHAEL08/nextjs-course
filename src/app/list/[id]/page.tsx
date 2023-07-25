import DetailData from "../_components/List";

import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  console.log(params);
  console.log(searchParams);

  return {
    title: searchParams.name,
  };
}

const DetailPage = () => {
  console.log("run on server"); // 在服务器输出内容，客户端看不到

  return (
    /* SSR+CSR混合渲染 */
    // 1. 服务器端生成DetailPage静态HTML页面，并将其发送到浏览器
    // 2. 浏览器接收到服务器发送的HTML后，重新渲染组件(hydration)
    // 3. React接管页面，使其能够响应用户的交互
    <div>
      <DetailData />
    </div>
  );
};

export default DetailPage;

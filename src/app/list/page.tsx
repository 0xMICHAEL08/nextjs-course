import React from "react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ListPage",
  description: "This is my list page.",
};

/* 这是服务器端代码 */
// 在服务器端发起请求时，因为没有浏览器的同源策略(CORS)限制，所以不会出现跨域错误
const loadDataFromMHY = () => {
  return fetch(
    "https://api-mall.mihoyogift.com/common/homeishop/v1/goods/search_goods_spu_list?limit=40&page=1&shop_code=ys&order_by=comprehensive&show_sale_type=1&hide_sold_out=false"
  ).then((res) => res.json());
};

const ListPage = async () => {
  const data = [
    {
      id: 1,
      name: "第一组数据",
    },
    {
      id: 2,
      name: "第二组数据",
    },
    {
      id: 3,
      name: "第三组数据",
    },
  ];

  const mhyData = await loadDataFromMHY();

  return (
    <div>
      <h1>ListPage</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={"/list/" + item.id}>{item.name}</Link>
          </li>
        ))}
        {mhyData.data.list.map((item: any) => (
          <li key={item.goods_id}>
            <Link href={"/list/" + item.goods_id + "?name=" + item.name}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;

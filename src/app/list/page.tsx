import React from "react";
import Link from "next/link";
import List from "./_components/List";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ListPage",
  description: "This is my list page.",
  keywords: "next.js, react",
};

const ListPage = () => {
  return (
    <div className="list-page">
      ListPage
      <List />
    </div>
  );
};

export default ListPage;

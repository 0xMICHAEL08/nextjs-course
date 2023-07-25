"use client";
import React, { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
}

const List = () => {
  const [data, setData] = useState<Item[]>([]);
  useEffect(() => {
    fetch("/api/list")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;

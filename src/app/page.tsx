import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
  description: "This is my home page.",
};

const Home = () => {
  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
};

export default Home;

import Link from "next/link";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Link href={"/"}>{"【Home Page】"}</Link>
        <Link href={"/about"}>{"【About Page】"}</Link>
        <Link href={"/list"}>{"【List Page】"}</Link>
        <hr />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

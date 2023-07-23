import React from "react";

const ListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>This is list layout page.</h1>
      {children}
    </div>
  );
};

export default ListLayout;

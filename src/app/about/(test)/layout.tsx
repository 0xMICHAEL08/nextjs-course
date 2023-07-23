import React from "react";

const Testlayout = ({ children }: any) => {
  return <div className="text">Testlayout{children}</div>;
};

export default Testlayout;

/* 
  路由组：
    1. 创建路由组的方式是在文件夹名称中使用小括号，例如 (test)。这样，这个文件夹就被标记为一个路由组，它的名称将不会出现在 URL 路径中。
    2. 当你在 (test) 路由组内的页面之间切换时，这个布局是可以被共享的，不会触发全页面刷新。
    3. 但另一种情况：应用有两个路由组 shop 和 marketing。每个路由组都有自己的布局，分别定义在 app/(shop)/layout.js 和 app/(marketing)/layout.js。用户在 /cart 页面，这个页面使用的是 shop 路由组的布局。当用户点击一个链接，想要跳转到 /blog 页面时，这个页面使用的是 marketing 路由组的布局。因为 /cart 和 /blog 使用的是不同的根布局，所以在这种导航中，Next.js 会触发全页面的刷新，以便加载新的布局。
*/

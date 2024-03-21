import React from "react";

const LayoutLoginPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen bg-slate-100">
      LayoutLoginPage
      {children}
    </div>
  );
};

export default LayoutLoginPage;

import React, { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  children?: ReactNode;
}
const PageContainer = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`min-h-screen p-4 bg-background-light dark:bg-primary ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;

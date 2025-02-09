"use client";

import * as React from "react";

type PageHeadingProps = {
  title: string | undefined;
  variant?: "mainPage" | "projectPage";
  className?: string;
};

const PageHeading = ({
  title = "",
  variant,
  className = "",
}: PageHeadingProps) => {
  return (
    <h1
      className={`${
        variant === "projectPage" ? className : ""
      } text-clampPageHeading tracking-wide font-semibold`}
    >
      <span className="">{title}</span>
    </h1>
  );
};

export default PageHeading;

import React from "react";

export const AppContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="min-h-screen bg-base-100 text-base text-letter">
    <div className="page">{children}</div>
  </div>
);

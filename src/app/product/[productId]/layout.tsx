import React from "react";

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Review Header</div>
      {children}
    </div>
  );
}

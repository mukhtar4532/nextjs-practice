import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>Auth Header</div>
        <div>{children}</div>
      </body>
    </html>
  );
}

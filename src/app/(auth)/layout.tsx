"use client";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { title: "Login", href: "/login" },
  { title: "Register", href: "/register" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inputVal, setInputVal] = useState("");
  return (
    <html lang="en">
      <body>
        <div>
          {navigation.map((nav) => {
            return (
              <Link key={nav.title} href={nav.href}>
                {nav.title}
              </Link>
            );
          })}
        </div>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <div>{children}</div>
      </body>
    </html>
  );
}

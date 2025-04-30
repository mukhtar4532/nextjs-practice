import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About metaData",
};

export default function About() {
  return <h1>Hello from About page</h1>;
}

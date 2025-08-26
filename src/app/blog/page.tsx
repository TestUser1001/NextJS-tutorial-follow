import { Metadata } from "next";
import { setTimeout } from "timers";

export const metadata = {
  title: { absolute: "Blog" },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 2000);
  });
  return <h1>My blog</h1>;
}

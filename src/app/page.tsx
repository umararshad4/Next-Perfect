import Home from "@/components/main/Home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "home page here",
};

export default function HomePage() {
  return <Home />;
}

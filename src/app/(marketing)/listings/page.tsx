import type { Metadata } from "next";
import { LISTINGS } from "@/data/listings";
import ListingsClient from "./ListingsClient";

export const metadata: Metadata = {
  title: "Properties",
  description: "Browse active listings and properties represented by Mitchell Parsons, licensed real estate agent at LUXRE Realty.",
};

export default function ListingsPage() {
  return <ListingsClient listings={LISTINGS} />;
}

import type { Metadata } from "next";
import ValuationClient from "./ValuationClient";

export const metadata: Metadata = {
  title: "Home Valuation",
  description: "Find out what your home is worth. Get a free, personalized home valuation from Mitchell Parsons at LUXRE Realty.",
};

export default function ValuationPage() {
  return (
    <main>
      <ValuationClient />
    </main>
  );
}

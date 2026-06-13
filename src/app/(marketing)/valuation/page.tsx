import type { Metadata } from "next";
import ValuationClient from "./ValuationClient";

export const metadata: Metadata = { title: "Home Valuation" };

export default function ValuationPage() {
  return (
    <main>
      <ValuationClient />
    </main>
  );
}

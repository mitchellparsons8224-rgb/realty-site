import type { Milestone } from "@/types";

export const MILESTONES: Milestone[] = [
  {
    id: "1",
    year: 2024,
    title: "Top Producer",
    value: "$0M+",
    description: "Placeholder — update with your actual volume.",
    category: "Volume",
  },
  {
    id: "2",
    year: 2023,
    title: "Homes Closed",
    value: "0+",
    description: "Placeholder — update with your transaction count.",
    category: "Transaction",
  },
  {
    id: "3",
    year: 2023,
    title: "Award Name",
    value: "",
    description: "Placeholder — add any awards or recognition here.",
    category: "Award",
  },
];

export const STATS = [
  { value: "$0M+",  label: "In Sales Volume" },
  { value: "0+",   label: "Homes Sold" },
  { value: "0+",   label: "Happy Clients" },
  { value: "0",    label: "Years Experience" },
];

import { Metadata } from "next";
import ResearchClient from "./ResearchClient";

export const metadata: Metadata = {
  title: "Tissue Engineering Research — Celutron",
  description: "Scientific publications, research areas, and R&D development timelines of Celutron Innovations.",
};

export default function ResearchPage() {
  return <ResearchClient />;
}

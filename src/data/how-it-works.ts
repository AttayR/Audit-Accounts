import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  ClipboardList,
  FolderOpen,
  LineChart,
  MessageSquare,
} from "lucide-react";

export type ProcessStep = {
  id: number;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Free consultation",
    description: "We learn about your business, goals, and current finance setup.",
    detail:
      "A 30-minute call to understand your reporting needs, deadlines, and priorities—no obligation.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Scope & proposal",
    description: "You receive a clear plan, timeline, and transparent pricing.",
    detail:
      "We outline deliverables, responsibilities, and milestones so you know exactly what to expect.",
    icon: ClipboardList,
  },
  {
    id: 3,
    title: "Secure onboarding",
    description: "We set up access, documents, and a dedicated point of contact.",
    detail:
      "Data is handled confidentially. We agree on channels, reporting cadence, and key contacts on both sides.",
    icon: FolderOpen,
  },
  {
    id: 4,
    title: "Delivery & updates",
    description: "Our team executes the work and keeps you informed throughout.",
    detail:
      "Regular progress updates, draft reviews where needed, and direct access to your lead adviser.",
    icon: LineChart,
  },
  {
    id: 5,
    title: "Review & ongoing support",
    description: "Final deliverables, walkthrough, and optional continued partnership.",
    detail:
      "We close out the engagement with clear documentation and can support recurring finance needs.",
    icon: CalendarDays,
  },
];

export const engagementHighlights = [
  {
    title: "One-off projects",
    description:
      "Statutory audits, tax filings, due diligence, or advisory assignments with a defined start and end.",
  },
  {
    title: "Ongoing support",
    description:
      "Fractional CFO, monthly reporting, payroll, and compliance work on a retained basis.",
  },
  {
    title: "Hybrid engagements",
    description:
      "Combine project delivery with periodic check-ins—for example, year-end audit plus quarterly reviews.",
  },
];

export const clientExpectations = [
  "A named lead contact for every engagement",
  "Transparent timelines before work begins",
  "Secure handling of financial records",
  "Draft reviews at key milestones",
  "Plain-language explanations, not jargon",
];

import { Grid3x3, UserSquare2, MessageSquare, Zap, Headphones } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Mock data — stands in for what the college admin already created  */
/* ------------------------------------------------------------------ */

export const STUDENT = {
  name: "Aayushi Sharma",
  college: "Padre Conceicao College of Engineering",
  email: "aayushi.sharma@pcce.edu.in",
};

export const STEPS = ["welcome", "verify", "otp", "password", "success", "dashboard"];

export const TOUR_STEPS = [
  {
    key: "buzz",
    title: "Stay Updated",
    description:
      "Buzz keeps you informed about college announcements, events, competitions, and important updates.",
  },
  {
    key: "courses",
    title: "Your Courses",
    description:
      "Access your courses, attendance, schedules, and learning resources from one place.",
  },
  {
    key: "messages",
    title: "Stay Connected",
    description: "Communicate with classmates, faculty members, and course groups.",
  },
  {
    key: "careers",
    title: "Grow Your Career",
    description:
      "Discover internships, placement opportunities, workshops, and career resources.",
  },
  {
    key: "support",
    title: "We're Here to Help",
    description: "Need help? Contact Hive support or your college administrator anytime.",
  },
];

export const NEW_FEATURE = {
  title: "AI Study Assistant",
  description:
    "Generate summaries, flashcards, and practice questions directly from your course material.",
};

export const FEED = [
  {
    tag: "Events Board",
    author: "Dr. Shailesh K…",
    dept: "Padre Conceicao Co…",
    text: "📣 Calling All PCCE Students: Participate in MSME Idea Hackathon 6.0 …",
    time: "9d",
  },
  {
    tag: "Events Board",
    author: "Dr. Shailesh K…",
    dept: "Padre Conceicao Co…",
    text: "📣 Calling All PCCE Students! Tally Code Brewers 2026: Brew Code | Build Impact…",
    time: "9d",
  },
  {
    tag: "Events Board",
    author: "Dr. Shailesh K…",
    dept: "Padre Conceicao Co…",
    text: "Your Idea Won't Pitch Itself …",
    time: "11d",
  },
];

export const NAV_ITEMS = [
  { key: "buzz", icon: Grid3x3, label: "Buzz" },
  { key: "courses", icon: UserSquare2, label: "Courses" },
  { key: "messages", icon: MessageSquare, label: "Messages" },
  { key: "careers", icon: Zap, label: "Careers" },
  { key: "support", icon: Headphones, label: "Support" },
];

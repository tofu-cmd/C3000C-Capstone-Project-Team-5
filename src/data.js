// All the sample data for the app lives here so the components stay short.

export const pages = [
  { id: "overview", icon: "🏠", label: "Overview" },
  { id: "challenges", icon: "🎯", label: "Challenges" },
  { id: "recognition", icon: "🏅", label: "Recognition & rewards" },
  { id: "learning", icon: "📖", label: "Learning & Development" },
  { id: "feed", icon: "💬", label: "Team feed" },
  { id: "hr", icon: "💼", label: "HR self-service" },
  { id: "insights", icon: "📊", label: "Insights" },
];

export const headings = {
  overview: {
    title: "A little progress, every day",
    subtitle: "Good morning, Maya. Here's your week at a glance.",
  },
  challenges: {
    title: "Find your next small win",
    subtitle: "Challenges are invitations, not obligations.",
  },
  recognition: {
    title: "Celebrate the good stuff",
    subtitle: "Notice it. Say it. Help it grow.",
  },
  learning: {
  title: "Learning & Development",
  subtitle: "Grow your skills, complete training, and earn points.",
},
  feed: {
    title: "Good things happen together",
    subtitle: "Share a milestone, a thank-you, or a bright spot.",
  },
  hr: {
    title: "Your people hub",
    subtitle: "Everyday HR information in one friendly place.",
  },
  insights: {
    title: "How is the team feeling?",
    subtitle: "A sample view of participation and engagement trends.",
  },
};

export const people = [
  { name: "Avery Chen", team: "Product", points: 1830 },
  { name: "Maya Lewis", team: "People", points: 1420 },
  { name: "Sam Rivera", team: "Product", points: 1360 },
  { name: "Nina Patel", team: "People", points: 1280 },
  { name: "Jordan Lee", team: "People", points: 1180 },
  { name: "Priya Shah", team: "Product", points: 1120 },
];

export const challenges = [
  { id: "learn", icon: "📖", title: "Finish a learning module", detail: "Pick up one new idea in 15 minutes.", points: 40, type: "Learning" },
  { id: "feedback", icon: "💬", title: "Share one piece of feedback", detail: "Help shape the next team update.", points: 25, type: "Culture" },
  { id: "mindful", icon: "🧘", title: "Take a mindful moment", detail: "Pause for a short reset today.", points: 20, type: "Wellness" },
  { id: "steps", icon: "👟", title: "Take a fresh-air walk", detail: "Log a walk or a step-count goal.", points: 30, type: "Wellness" },
  { id: "goal", icon: "🎯", title: "Log a goal milestone", detail: "Celebrate a goal you made progress on.", points: 35, type: "Performance" },
];

export const courses = [
  { id: "inclusive", title: "Inclusive teams, everyday", detail: "Level 2 · 12 min", points: 40, badge: "Inclusive Teammate" },
  { id: "feedback-skills", title: "Feedback that helps us grow", detail: "Level 1 · 8 min", points: 30, badge: "Clear Communicator" },
  { id: "privacy", title: "Everyday data care", detail: "Level 3 · 15 min", points: 50, badge: "Data-aware" },
];

export const rewards = [
  { id: "coffee", icon: "☕", title: "Coffee on us", detail: "A little treat for your next break.", points: 350 },
  { id: "gift-card", icon: "🎁", title: "Local shop gift card", detail: "Choose a small thank-you for yourself.", points: 650 },
  { id: "half-day", icon: "☀️", title: "Extra half-day leave", detail: "A little more time for what matters.", points: 1100 },
  { id: "perk", icon: "✨", title: "Choose-your-own perk", detail: "Pick from this month's team perks.", points: 900 },
];

export const quizOptions = [
  { id: "listen", text: "Be specific, kind, and leave space to listen" },
  { id: "fast", text: "Share it quickly, without asking questions" },
  { id: "private", text: "Wait until the end of the year to mention it" },
];

export const pollOptions = [
  "More time to learn",
  "A little more focus time",
  "More chances to connect",
  "Something else",
];

export const startingPosts = [
  {
    id: 1,
    author: "Jordan Lee",
    role: "People team",
    time: "12 min ago",
    text: "Wrapped up my first mentoring session this morning. Big thanks to everyone who made the new buddy program feel so welcoming.",
    likes: 18,
    liked: false,
    comments: [],
  },
  {
    id: 2,
    author: "Priya Shah",
    role: "Product design",
    time: "1 hour ago",
    text: "Our design crew hit the accessibility review milestone. Small steps, better experiences for everyone.",
    likes: 12,
    liked: false,
    comments: [],
  },
];

export const weekBars = [
  { day: "M", height: 38 },
  { day: "T", height: 58 },
  { day: "W", height: 45 },
  { day: "T", height: 82 },
  { day: "F", height: 66 },
  { day: "S", height: 30 },
  { day: "S", height: 48 },
];

export const engagementByMonth = [
  { label: "May", value: 58 },
  { label: "Jun", value: 66 },
  { label: "Jul", value: 62 },
  { label: "Aug", value: 73 },
  { label: "Sep", value: 69 },
  { label: "Oct", value: 82 },
];

// Helper: "Jordan Lee" -> "JL"
export function getInitials(name) {
  return name
    .split(" ")
    .map(word => word[0])
    .join("");
}

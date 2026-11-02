// All the sample data for the app lives here so the components stay short.

export const pages = [
  { id: "overview", icon: "🏠", label: "Overview" },
  { id: "feed", icon: "💬", label: "Team feed" },
  { id: "hr", icon: "💼", label: "HR self-service" },
  { id: "insights", icon: "📊", label: "Insights" },
];

export const headings = {
  overview: {
    title: "A little progress, every day",
    subtitle: "Good morning, Maya. Here's your week at a glance.",
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

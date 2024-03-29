import { Post } from "../typescript/types";

export const posts: Post[] = [
  {
    author: "Batista Oliveira",
    content:
      "React.memo is a HOC that wraps a React functional component and does an initial render of the component when it first loads and stores it in memory. When the props change React does a shallow comparison of prop values. If true, React uses the memoized component and skips a re-render. If false, React re-renders the component.",
    date: "Feb 12, 2023",
    id: "1",
    readingTime: "5 min",
    title: "React Memoization — useCallback, useMemo and React.memo",
    topics: ["React", "React Memoization", "useCallback", "ReactHooks", "HOC"],
    url: "https://medium.com/@batistatomeoliveira96/react-memoization-in-practice-eeb3e373b67e",
  },
  {
    author: "Batista Oliveira",
    content:
      "When you start build a modern web app powered by ReactJs is awesome, but at certain point you realize that there are so many problems related to render all Javascript file on client-side...",
    date: "Jul 19, 2020",
    id: "2",
    readingTime: "4 min",
    title: "Why NextJs and How to start ?",
    topics: [
      "React",
      "Nextjs",
      "Framework",
      "Bundler",
      "SSR",
      "deploy",
      "API",
      "CSR",
      "Code Splitting",
    ],
    url: "https://medium.com/swlh/why-nextjs-and-how-to-start-6bf5c28f5a87",
  },
  {
    author: "Batista Oliveira",
    content:
      "Context API turn some of your data global to your application to avoiding props drilling that is a situation when you pass the props down to many child components until get to the component that you want use the data, at some time you pass props for those that does not need the data and it create some confusion when you want to manipulate the data or make some changes on your app...",
    date: "Jul 19, 2020",
    id: "2",
    title: "What is Context API and Build Dark Mode App with it",
    topics: ["React", "Context API", "Dark Mode APP"],
    readingTime: "3 min",
    url: "https://medium.com/@batistatomeoliveira96/what-is-context-api-and-build-dark-mode-app-with-it-7eaa4929a0c6",
  },
];

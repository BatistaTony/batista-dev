const myBirthYear = 2000;
const actualYear = new Date().getFullYear();

const actualAge = actualYear - myBirthYear;

export const aboutData = {
  heroText: `I have +3 years of experiences building a great and complext web applications (Front-End), server side application (Back-End), responsiveness web applications with fluid layout and integrated with external services.`,

  text1: `My name is Batista Tome Oliveira, I have ${actualAge} years old I’m professional software developer with 3+ years of experiences, 

            Currently I’m doing my second semester of bachelor of computer Science at University of Applied Sciences of German.

            I’m a self-taught developer, always fascinated about learning new things at tech and bringing new solutions.

            `,
  text2: `With 3+ years of experiences I have advanced knowledge about  Javascript and Reactjs and its core as well as others 

techs that make a part of Reactjs stack, applying SOLID principles and Clean Code Architecture to maintain all components reusable and maintainable,

I also have advanced knowledge of responsiveness techniques using Flex and Grid Layout combined with Media Query.`,
  text3: `Lately I'm been working as a Full Stack Developer, working with Nestjs, TypeORM, Mysql, Docker, creating new endpoints and services for existent projects

fixing bugs in production, building new features for both server and front application.


`,
  skills: [
    { title: "React", icon: "react-original" },
    { title: "Typescript", icon: "typescript-original" },
    { title: "Javascript", icon: "javascript-plain" },
    { title: "Firebase", icon: "firebase-plain" },
    { title: "Css", icon: "css3-plain" },
    { title: "MongoDb", icon: "mongodb-plain" },
    { title: "Nodejs", icon: "nodejs-plain" },
    { title: "Mysql", icon: "mysql-plain" },
    { title: "Jest", icon: "jest-plain" },
    { title: "Git & Github", icon: "github-original" },
    { title: "Graphql", icon: "graphql-plain" },
    { title: "CI/CD", icon: "" },
    { title: "Docker", icon: "docker-plain" },
    { title: "Prisma", icon: "" },
    { title: "TypeORM", icon: "" },
    { title: "Flutter", icon: "flutter-plain" },
    { title: "React Testing Library", icon: "react-original" },
    { title: "Nestjs", icon: "nestjs-plain" },
    { title: "Styled-Components", icon: "" },
    { title: "Expressjs", icon: "express-original" },
    { title: "HTML", icon: "html5-plain" },
    { title: "Sass", icon: "sass-original" },
    { title: "Redux Toolkit", icon: "redux-original" },
    { title: "Next.js", icon: "nextjs-original" },
  ],
};

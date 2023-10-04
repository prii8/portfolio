import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    hashedin,
    sqlA,
    springboot,
    pandas,
    sql,
    cpp,
    matplotlib,
    langchain,
    langchain1,
    fakenews,
    Summarizer,
    Social,
    youtube,
    think,
    bal,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Science and Machine Learning",
      icon: mobile,
    },
    {
      title: "Generative AI",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "sql",
      icon: sql,
    },
   
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
   
    
    {
      name: "Java spring boot",
      icon: springboot,
    },
    {
      name: "flask SqlAlchemy",
      icon: sqlA,
    },
    
    {
      name: "lang",
      icon: langchain1,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "SDE Intern",
      company_name: "HashedIn by Deloitte",
      icon: hashedin,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        `Completed a 3-month intensive training program with Diversetracks, 
        encompassing software development and trending technologies.`,
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Gained hands-on experience with both frontend and backend technologies .",
        "Participating in code reviews and providing constructive feedback to other developers, fostering a culture of continuous improvement.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "BalancedBite",
      description:
        " Balanced Bite is a web-based application that calculates personalized caloric and macronutrient targets for users, recommending meals to help them achieve their specific health and fitness goals. Key features include real-time tracking and progress visualization.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask-sqlAlchemy",
          color: "green-text-gradient",
        },
        {
          name: "Langchain",
          color: "pink-text-gradient",
        },
      ],
      preview:false,
      image: bal,
      source_code_link: "https://github.com/prii8/BalancedBite-frontend",
    },
    {
      name: "Think Think Create",
      description:
        "It is an application that enables users to design custom t-shirts by providing prompts or descriptions. It seamlessly combines AI, React, Three.js, and Frame Motion, allowing users to effortlessly customize and visualize shirt designs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "openAI",
          color: "pink-text-gradient",
        },
      ],
      preview:false,
      image: think,
      source_code_link: "https://github.com/prii8/shirt-design-using-Ai",
    },
    {
      name: "Youtube clone",
      description:
        "The YouTube Clone project is a web application meticulously crafted using HTML and CSS. It seeks to faithfully replicate the iconic YouTube homepage, taking great care to reproduce every aspect and detail.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
       
      ],
      preview:false,
      image: youtube,
      source_code_link: "https://github.com/prii8/YouTube-clone",
    },
    {
      name: "Fake News Detection",
      description:
        "The Fake News Detection project is an NLP endeavor that employs deep learning models like CNN, LSTM, and a hybrid CNN-LSTM model to distinguish real from fake news articles. ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "LSTM",
          color: "green-text-gradient",
        },
        {
          name: "CNN",
          color: "pink-text-gradient",
        },
      ],
      preview:false,
      image: fakenews,
      source_code_link: "https://github.com/prii8/Fake-News-Detection-using-Deep-learning",
    },
    {
      name: "Social Media Platform (APIs)",
      description:
        "Powered by Java Spring Boot, this API platform facilitates seamless social networking with comprehensive CRUD functionality for users, posts, and comments. ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "spring boot",
          color: "green-text-gradient",
        },
        
      ],
      preview:false,
      image: Social,
      source_code_link: "https://github.com/prii8/socialmediaplatform-JavaSpringboot-",
    },
    {
      name: "Document Summarizer and chatbot",
      description:
        "This versatile solution allows users to upload documents and obtain concise summaries, as well as engage in  Q&A sessions directly sourced from the uploaded documents.",
      tags: [
        {
          name: "Langchain",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        
      ],
      preview:false,
      image: Summarizer,
      source_code_link: "https://github.com/prii8/doc_summarizer_and_chatbot_using_langchain",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
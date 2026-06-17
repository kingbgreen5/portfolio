import PortfolioCard from '../PortfolioCard';

import marsPicture from "/assets/rover-link.png";
import pokemonPicture from "/assets/PokeLore.jpg";
import fail2Feed from "/assets/Fail2Feed.png";

// import blogPicture from "/assets/blog-site.png";
// import monsterMine from "/assets/monster-mine.png";
// import workDay from "/assets/work-day.png";
// import noteTaker from "/assets/note-taker.png"
// import codeQuiz from "/assets/code-quiz.png"

const portfolioProjectsArray = [


   {
  key: 1,
  img:pokemonPicture,
  title:'PokeLore.net',
  repoLink:'https://github.com/kingbgreen5/PokeLore.net',
  deployed: 'https://pokelore-net.onrender.com/',
  description: "React/Vite website for exploring Pokémon data across generations, with a focus on searchable Pokédex entries and rapid access to detailed Pokémon information. "
},
  {
    key: 2,
    img:marsPicture,
    title:'Rover Link',
    repoLink:'https://github.com/kingbgreen5/rover-link',
     deployed:'https://rover-link.onrender.com/',
     description: "A UI which allows you to query the MarsVista API and search for photo from the Mars rovers Curioity and Perseverance"
  },


 {
  key: 3,
  img:fail2Feed,
  title:'Fail2Feed: Reliability Database',
   repoLink:'https://github.com/kingbgreen5/Fail2Feed',
  deployed: 'https://fail2feed-plt7.onrender.com/',
  description: "A a full-stack web application using user generated database. Allowing for the recording of reliability data for fireamrs"
},
//  {
//   key: 4,
//   img:workDay,
//   title:'Work-Day-Scheduler',
//   repoLink:'https://github.com/kingbgreen5/work-day-schedule',
//    deployed: 'https://kingbgreen5.github.io/work-day-schedule/'
// },
//  {
//   key: 5,
//   img:noteTaker,
//   title:'Note-Taker',
//   repoLink:'https://github.com/kingbgreen5/note-taker',
//   deployed: 'https://floating-hamlet-15376-a415bce60b61.herokuapp.com/notes'
// },
// {
//   key: 6,
//   img:codeQuiz,
//   title:'Code-Quiz',
//   repoLink:'https://github.com/kingbgreen5/code-quiz',
//   deployed: 'https://kingbgreen5.github.io/code-quiz/'
// },
]

export default function Portfolio() {
return (
  <div
  style={{

  }


  }>
    <br />
 <br />
     <div class="aboutme">
I’m a project-driven junior full-stack developer with experience building React applications, 
working with REST APIs, and using PostgreSQL-backed backend systems.
I’ve built projects with React, Vite, React Router, Node, Express, Sequelize, PostgreSQL, Mongo, and MySQL 
JWT authentication, external APIs, and Render deployment workflows. My strongest experience is 
building practical applications from scratch, debugging real issues, organizing complex data, and turning 
that data into usable interfaces.
 </div>
 <br />
 <br />
    <h2>My Projects</h2><div>
      <br />
      <br />
    </div>


    <div
    style={{
        display:'flex',
    justifyContent:"center",
      width:1000,
      margin: "0 auto"
    }
      
    }
    >
<PortfolioCard  portfolioProjectsArray={portfolioProjectsArray}/>
</div>
  </div>
);
}

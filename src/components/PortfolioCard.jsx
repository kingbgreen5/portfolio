export default function PortfolioCard(props) {

return(
    <div>
            <ul  >
                {props.portfolioProjectsArray.map((projects) => (
                    <li key={projects.key}>
                 <div class="portfolio-card"
                 style={{

                    justifyContent:"center"
                 }} >
                    <h3>{projects.title}</h3>

<a href={projects.deployed} target="_blank" rel="noopener noreferrer">
  <img src={projects.img} alt={projects.title} style={{
    width:"100%",
    cursor: "pointer",
  }}
  
  
  />
</a>

{/* 
                    <img className="portfolio-card-photo"  src={projects.img} alt=""/> */}

                   <div><a href={projects.deployed} target="_blank">Deployed Application</a></div>
                   <div><a href={projects.repoLink} target="_blank">Repository Link</a></div>
                   <div>{projects.description}</div>
                   </div>
                    </li>
                ))}
            </ul>
    </div>
)};
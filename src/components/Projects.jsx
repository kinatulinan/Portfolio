import fitflow from "./images/fitflow.svg";
import tanjiro from "./images/tanjiro.jpg";

function Projects() {
  const featuredProjects = [
    {
      title: "FitFlow",
      image: fitflow,
      description:
        "FitFlow is a fitness application designed to help users achieve their health and fitness goals through: Personalized workout plans, Smart meal suggestions, Progress tracking with detailed analytics",
      link: "https://fitflow0.netlify.app/login",
    },
  ];
  return (
    <>
      <section className="mt-50">
        <div>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              backgroundColor: "#320A6B",
            }}
            className="text-6xl text-white p-3 font-semibold"
          >
            projects.
          </span>
        </div>
        <div className="mt-20">
          <span
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-4xl"
          >
            Featured Projects
          </span>
        </div>
        <div class="project-container">
          {/* First Featured Project */}
          <div class="card-container" className="card-container">
            <article className="card-article">
              <img src={tanjiro} class="card-image"></img>
              <div class="card-data" className="card-data">
                <h2 class="card-title" className="card-title">
                  FitFlow
                </h2>
                <span
                  class="card-description"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="text-s text-left"
                >
                  Our team developed FitFlow
                </span>

                <a class="card-button">Demo</a>
              </div>
            </article>
          </div>

          {/* Second Featured Project */}
        </div>
      </section>
      <style>
        {`
          .project-container{
            display:flex;
            gap: 2rem;
            place-items:center;
            margin-inline: 1.5rem;
            padding-block: 2rem;
            justify-content: center;
            flex-wrap: wrap;
            
            
          }

          .card-container{
            display:flex;
            flex-direction: column;
            align-items: center;
            row-gap:3.5rem
          }

          .card-article{
            position: relative;
          }

          .card-image{
            width: 300px;
            height:300px;
            border-radius: 1.5rem;
          }
          
          .card-data{
            width: 280px;
            background-color: white;
            padding: 1.5rem 2rem;
            box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
            border-radius: 1rem;
            position:absolute;
            bottom: -9rem;
            left: 0;
            right: 0;
            margin-inline: auto;
            opacity: 0;
            transition: opacity 0.2s 1s;
          }

          .card-description{
            display:block;
            font-size: 12px;
            margin-bottom: .25rem;
            
          }

          .card-title{
            font-size: 18px;
            font-weight: 500;
            color: black;
            margin-bottom: .75rem;

          }

          .card-button{
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: black;
          }
        
          .card-article:hover .card-data{
            animation: show-data 1s forwards;
            opacity: 1;
            transition: opacity .3s;

          }

          .card-article:hover{
            animation: remove-overflow 2s forwards;
          }

          .card-article:not (:hover){
            animation: show-overflow 2s forwards;
          }

          .card-article:not(:hover) .card-data{
            animation: remove-data 1s forwards;
          }

          @keyframes show-data{
          50%{
            transform: translateY(-10rem);
          }
          100%{
            transform: translateY(-7rem);
          }  
            }

          @keyframes remove-overflow{
            to{
              overflow: initial;
            }
          }

          @keyframes remove-data{
          0%{
            transform: translateY(-7rem);
            }
            50%{
            transform: translateY(-10rem);
            }
            100%{
              transform: translateY(.5rem);
            }
          }
          
          @keyframes show-overflow{
          0%{
            overflow: initial;
            pointer-events: none;
            }
          50%{
            overflow:hidden;
          }  
          }

        `}
      </style>
    </>
  );
}

export default Projects;

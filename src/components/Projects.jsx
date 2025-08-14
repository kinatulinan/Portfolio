import fitflow from "./images/fitflow.svg";

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
      </section>
    </>
  );
}

export default Projects;

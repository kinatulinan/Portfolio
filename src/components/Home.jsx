import home_img from "./images/home1.png";

function Home() {
  return (
    <>
      <div>
        <section className="flex flex-col items-center justify-center h-screen">
          <div
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="flex flex-col items-start space-y-4   font-bold text-6xl w-25"
          >
            Hi!
          </div>
          <span
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="space-y-4  text-4xl font-semibold"
          >
            I'm{" "}
            <span
              style={{ backgroundColor: "#320A6B" }}
              className=" text-white p-1 font-semibold"
            >
              Kyle
            </span>{" "}
            and I am an aspiring Full Stack Developer.
          </span>
          <img src={home_img} alt="Home" className="w-[600px] h-[600px] mt-2" />
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
              className=" mt-8 w-180 text-2xl text-center font-italic"
            >
              I enjoy building websites and applications that are simple,
              useful, and easy to use. I'm eager to learn new things to improve
              my craft and create better projects and opportunities.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

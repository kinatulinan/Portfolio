function NavigationBar() {
  return (
    <>
      <nav className="p-8 fixed top-0 left-0 w-full z-50">
        <div className="container ml-15 flex justify-between items-center mr-10">
          <div
            style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}
            className="text-black text-4xl font-bold font-special-gothic-expanded-one-regular"
          >
            MORENO
          </div>
          <div
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="space-x-10"
          >
            <a href="#home" className="text-black hover:text-[#320A6B] text-xl">
              Home
            </a>
            <a
              href="#about"
              className="text-black hover:text-[#320A6B] text-xl"
            >
              About
            </a>
            <a
              href="#crafts"
              className="text-black hover:text-[#320A6B] text-xl"
            >
              Crafts
            </a>
            <a
              href="#projects"
              className="text-black hover:text-[#320A6B] text-xl"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-black hover:text-[#320A6B] text-xl"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="pt-24">
        <section></section>
      </div>

      <style>
        {`
            
            nav{
              background-color: white;
              border-color: #320A6B;
              border-width: 1px;
            }

          
        `}
      </style>
    </>
  );
}

export default NavigationBar;

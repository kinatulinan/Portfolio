import css from "./images/css.png";
import html from "./images/html.png";
import js from "./images/js.png";
import typescript from "./images/typescript.png";
import tailwindcss from "./images/tailwind.svg";
import reactjs from "./images/reactjs.png";

import java from "./images/java.png";
import c from "./images/c.png";
import python from "./images/python.png";
import springboot from "./images/springboot.png";
import php from "./images/php.png";
import nodejs from "./images/nodejs.svg";
import kotlin from "./images/kotlin.svg";
import react_native from "./images/react-native.png";
import expo from "./images/Expo.svg";
import django from "./images/django.svg";

import mysql from "./images/mysql.svg";
import firebase from "./images/firebase.svg";
import supabase from "./images/supabase.png";

function Crafts() {
  return (
    <>
      <div className="mt-50">
        <section>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
            className="mt-10 text-6xl text-white font-semibold p-3 bg-[#320A6B] w-fit"
          >
            {" "}
            crafts.
          </span>

          {/* Progamming Tools Section */}
          <section>
            <div className="mt-20">
              <span
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className=" text-4xl "
              >
                {" "}
                My Programming Tools{" "}
              </span>
              <div className="mt-20">
                <span
                  className="relative inline-block group cursor-pointer text-2xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Front-end Craft
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-[#320A6B] transition-all duration-300 w-0 group-hover:w-full"></span>
                </span>
              </div>
              <div className="flex gap-25 justify-center display-row mt-10">
                <img
                  src={html}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={css}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={js}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={reactjs}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={typescript}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={tailwindcss}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
              </div>

              <div className="mt-20">
                <span
                  className="relative inline-block group cursor-pointer text-2xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Back-end Craft
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-[#320A6B] transition-all duration-300 w-0 group-hover:w-full"></span>
                </span>
              </div>

              <div className="flex gap-25 justify-center display-row mt-10 items-center">
                <img
                  src={c}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={java}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={python}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={php}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={springboot}
                  className="h-30 w-30 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={nodejs}
                  className="h-30 w-30 transition-transform duration-300 hover:scale-140"
                ></img>
              </div>
              <div className="flex justify-center mt-5">
                <img
                  src={django}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                />
              </div>

              <div className="mt-20">
                <span
                  className="relative inline-block group cursor-pointer text-2xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Mobile Development
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-[#320A6B] transition-all duration-300 w-0 group-hover:w-full"></span>
                </span>
              </div>
              <div className="flex gap-25 justify-center display-row mt-10 items-center">
                <img
                  src={react_native}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>

                <img
                  src={kotlin}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={expo}
                  className="h-30 w-30 transition-transform duration-300 hover:scale-140"
                ></img>
              </div>

              <div className="mt-20">
                <span
                  className="relative inline-block group cursor-pointer text-2xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Database
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-[#320A6B] transition-all duration-300 w-0 group-hover:w-full"></span>
                </span>
              </div>
              <div className="flex gap-25 justify-center display-row mt-10 items-center">
                <img
                  src={mysql}
                  className="h-30 w-30 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={firebase}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
                <img
                  src={supabase}
                  className="h-15 w-15 transition-transform duration-300 hover:scale-140"
                ></img>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Crafts;

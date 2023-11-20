// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const faGrapQl = {
  prefix: 'fac',
  iconName: 'graphql', // Any name you like
  icon: [
      400, // width
      400, // height
      [], // ligatures
      '', // unicode (if relevant)
      'M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z M39.8 272.2h320.3v16.6H39.8z M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9' // svg path data
  ]
}
import {
  faGolang,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGrapQl)

export default function Project() {
  return (
    <section id="projects" className="md:p-32  bg-gradient-to-b from-blue-50 via-indigo-100 to-green-50 p-1">
      <div className=" rounded-md bg-gradient-to-br from-green-500 via-green-100 to-white p-1">
        <div className="relative  bg-gradient-to-b from-white  via-white to-green-100">
          <div className="relative  min-h-screen w-full flex flex-col justify-start justify-items-start items-start text-left md:p-32 pl-3 pt-3">
            <h2 data-aos="fade-right" className="font-extrabold  text-3xl md:text-7xl flex">
             <span className=" text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 bg-transparent "> Some thing i've built </span> <h1 className="bg-clip-text bg-transparent" data-aos="fade-right" data-aos-delay="500">🔥</h1>
            </h2>
            <h3 className="font-poppins md:text-3xl  text-blue-900 text-start my-3 ">
              I've worked on various projects from small MVC to large scale
              application. <br></br>My creations are fueled by curiosity, and an
              eagerness to manifest all my ideas into code.
            </h3>

            <div className="max-w-screen w-full md:w-full">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="container flex flex-col w-full  rounded-md bg-gradient-to-br from-blue-400  to-white p-0.5 my-10"
              >
                {" "}
                <div className=" h-full w-full bg-gradient-to-r from-blue-100  to-white md:p-32 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-5">
                  <h2 className="font-poppins text-3xl  text-blue-950 font-bold  my-3">
                    GPT OTG{" "}
                    <span className="text-red-300  text-sm"> beta </span>
                  </h2>
                  <h3 className="font-poppins text-[1em] md:text-[1.5em]text-blue-950 text-start my-3">
                    A chrome extension that act as acompainion while you surfing
                    the web. It allows you to ask the meaning of something, make
                    a word for you and event "Typing" for you, and also
                    summarize the article you are reading (Youtube Video Too!).
                    Built with on top of Chat GPT API
                  </h3>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="rounded-lg shadow-md bg-white p-2 my-5 text-center"
                  >
                    <img src="/gptotg1.png"></img>
                    <label className="md:text-xl font-poppins mt-3">
                      Summarize youtube instantly
                    </label>
                  </div>

                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="rounded-lg shadow-md bg-white p-2 my-5 text-center"
                  >
                    <img src="/gptotg3.png"></img>
                    <label className="md:text-xl font-poppins mt-3">
                      {" "}
                      has ability to gather the information from internet{" "}
                      <span className="font-bold">Real Time</span>{" "}
                    </label>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="rounded-lg shadow-md bg-white p-2 my-5 w-fit"
                  >
                    <video width="700" controls autoPlay loop>
                      <source
                        src="https://dms.licdn.com/playlist/vid/D5605AQFwsb3Vkm6Zwg/mp4-720p-30fp-crf28/0/1689183136944?e=1700503200&v=beta&t=E2sLWlLREjJlYH4BQjo4kvKkweVybHE1qLRzQe3Ehsk"
                        type="video/mp4"
                      />
                      Your browser does not support HTML video.
                    </video>
                    <label className="md:text-xl text-center font-poppins ">
                      {" "}
                      Watch how the summarize works in{" "}
                      <span className="font-bold">Real Time</span>{" "}
                    </label>
                  </div>
                  <div className="grid-cols-2 grid">
                    <a href="https://chromewebstore.google.com/detail/gpt-otg-development-build/fmibenbpkickilfocjdghokdnkmolhfi?hl=en&pli=1" target="_blank">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      className="bg-white shadow-sm  rounded-md hover:shadow-md hover:cursor-pointer  w-full p-4"
                    >
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75"></span>{" "}
                      <span className="absolute inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                      <img width={300} src="/chromewebstore.png"></img>
                    </div>
                    </a>
                   <a href="https://myanpetra99.github.io/GPT-OTG-WEB/#/" target="_blank">
                   <div
                      data-aos="fade-right"
                      data-aos-duration="1300"
                      className="bg-white shadow-sm  rounded-md hover:shadow-md hover:cursor-pointer mx-5 w-full p-4"
                    >
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75"></span>{" "}
                      <span className="absolute inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                      <img width={300} src="/githublogo.webp"></img>
                    </div>
                   </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="container flex flex-col w-full rounded-md bg-gradient-to-br from-gray-400  to-white p-0.5 my-10 shadow-[6px_7px_27px_1px_#808080] "
              >
                {" "}
                <div className=" h-full w-full bg-gradient-to-r from-gray-100  to-white md:p-32 p-5">
                  <h2 className="font-poppins text-xl md:text-3xl text-blue-950 font-bold  my-3">
                  Phone Contact Clone
                  </h2>
                  <h3 className="font-poppins text-[1em] md:text-[1.5em]text-blue-950 text-start my-3">
                    I love this one,  using 
                    <span className="text-blue-500 font-bold">
                      React JS <FontAwesomeIcon icon={faReact} />
                    </span>
                    and{" "}
                    <span className="text-blue-500 font-bold">
                      GraphQL <FontAwesomeIcon icon={faGrapQl} />
                    </span>
                    . I'm cloning the Contact app based on samsung phone{" "}
                  </h3>
                  <div className="flex ">
                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75"></span>{" "}
                    <span className="absolute inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                    <a href="https://myanpetra99.github.io/react-ts-phonebook/" target="_blank">
                      <div className=" rounded-md hover:shadow-md hover:cursor-pointer w-fit p-5  border-l border-gray-50 bg-blue-950 flex flex-row">
                        <h1 className="text-lg font-poppins font-light text-white border-black">
                          Live at&nbsp;&nbsp;
                         
                        </h1>
                        <img src="/githubpagelogo.svg"  className="mx-5h"width={200}></img>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="container flex flex-col w-full rounded-md bg-gradient-to-br from-orange-400  to-white p-0.5 my-10 shadow-[6px_7px_27px_1px_#dd6b20] "
              >
                {" "}
                <div className=" h-full w-full bg-gradient-to-r from-orange-100  to-white md:p-32 p-5">
                  <h2 className="font-poppins text-xl md:text-3xl text-blue-950 font-bold  my-3">
                    Kecilin{" "} - url shortner
                  </h2>
                  <h3 className="font-poppins text-[1em] md:text-[1.5em]text-blue-950 text-start my-3">
                    A very simple, free, no limit, url shortner. Build using
                    <span className="text-blue-500 font-bold">
                      Next JS <FontAwesomeIcon icon={faReact} />
                    </span>
                    ,{" "}
                    <span className="text-blue-500 font-bold">
                      Golang <FontAwesomeIcon icon={faGolang} />
                    </span>
                    {" "}and{" "}
                    <span className="text-blue-500 font-bold">
                      PostgreSQL <FontAwesomeIcon icon={faDatabase} />
                    </span>
                    . You should try it out!{" "}
                  </h3>
                  <div className="flex ">
                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75"></span>{" "}
                    <span className="absolute inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                    <a href="https://kecilin.vercel.app/" target="_blank">
                      <div className=" rounded-md hover:shadow-md hover:cursor-pointer w-fit p-5  border-l border-gray-50 bg-blue-950 flex flex-row">
                        <h1 className="text-lg font-poppins font-light text-white border-black">
                          Live at{" "}
                        </h1>
                        <img src="/vercel.png" width={200}></img>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="container flex flex-col w-full rounded-md bg-gradient-to-br from-pink-400  to-white p-0.5 my-10 shadow-[0px_17px_27px_10px_#fbb6ce] break-words"
              >
                {" "}
                <div className=" h-full w-full bg-gradient-to-r from-pink-100  to-white md:p-32 p-5">
                  <a href="https://wearegettingmarried.my.id">
                    <h2 className="font-poppins text-xl md:text-3xl text-blue-950 font-bold  my-3 [overflow-wrap:anywhere] hover:text-blue-500">
                      Wearegettingmarried.my.id
                    </h2>
                  </a>
                  <h3 className="font-poppins text-[1em] md:text-[1.5em]text-blue-950 text-start my-3">
                    A landing page for my digital wedding service.
                    <br></br> built using{" "}
                    <span className="text-blue-500 font-bold">
                      golang <FontAwesomeIcon icon={faGolang} />
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-500 font-bold">
                      React <FontAwesomeIcon icon={faReact} />
                    </span>{" "}
                    and {" "}
                    <span className="text-blue-500 font-bold">
                      PostgreSQL <FontAwesomeIcon icon={faDatabase} />
                    </span>{" "}
                    .<br></br><span className="text-gray-500 text-sm font-light">"Married soon? why not use our service to make your
                    wedding more memorable." 🥰 <a href="https://putramonica.wearegettingmarried.my.id" target="_blank"><h3>Sneek peek one of the client 👉🏻 <span className="text-blue-400 hover:text-blue-500 hover:cursor-pointer">putramonica.wearegettingmarried.my.id</span></h3></a></span>
                  </h3>
                  
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="container flex flex-col w-full rounded-md bg-gradient-to-br from-indigo-400  to-white p-0.5 my-10 shadow-[0px_17px_27px_10px_#434190]  break-words"
              >
                {" "}
                <div className=" h-full w-full bg-gradient-to-r from-indigo-100  to-white md:p-32 p-5">
                  <h2 className="font-poppins text-xl md:text-3xl text-blue-950 font-bold  my-3 [overflow-wrap:anywhere]">
                    AGStore{" "}
                    <span className="text-sm text-gray-400">(Archived)</span>
                  </h2>
                  <h3
                    data-aos="fade-right"
                    data-aos-duration="1100"
                    className="font-poppins text-[1em] md:text-[1.5em]text-blue-950 text-start my-3"
                  >
                    My very first treasure. A gaming equipment E-commerce for
                    education. Built using
                    <span className="text-green-500 font-bold">
                      {" "}
                      MongoDB
                    </span> ,{" "}
                    <span className="text-yellow-500 font-bold">
                      EJS{" "}
                    </span> and{" "}
                    <span className="text-green-500 font-bold">
                      NodeJS <FontAwesomeIcon icon={faNodeJs} />
                    </span>
                  </h3>
                  
                  <p className="font-light text-gray" data-aos="fade-right" data-aos-duration="1000">
                    Because the project is currently archived, here's the Github or maybe a short
                    powerpoint about how i made it
                  </p>
               <a href="https://github.com/myanpetra99/Project-WebsiteGamingStore" target="_blank">
               <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="bg-white shadow-sm  rounded-md hover:shadow-md hover:cursor-pointer m-5 w-full p-4"
                  >
                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75"></span>{" "}
                    <span className="absolute inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                    <img width={200} src="/githublogo.webp"></img>
                  </div>
               </a>
                  <iframe
                    data-aos="fade-right"
                    data-aos-duration="1300"
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQfPXoCYrir4nQpCpE7WyBGL5th0OIOLpxrbKm1HMDBoeEhn31D8PRQODC6lsw7UA/embed?start=true&loop=true&delayms=3000"
                    frameborder="0"
                    width="300"
                    height="230"
                    allowfullscreen="true"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                  ></iframe>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/game-controller.webp";
import virtual from "../public/virtual_guy.gif";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyrp</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/drive/folders/18GBZhvkvqRqQUoC5XXwSITcrIhr5b9tD?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Rishabh Pal
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://twitter.com/rishabhpal25?t=3CoEENb2jyq896a8SyDLYw&s=08"
                target="_blank"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-pal25/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/rish-abh07" target="_blank">
                <AiFillGithub />
              </a>
              <a href="https://youtube.com/@ryanperspective" target="_blank">
                <AiFillYoutube />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div className="text-center text-3xl dark:text-white">
            "Programming is the art of giving life to inanimate objects, and
            games are the ultimate playground for bringing those objects to
            life." - John Romero.
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-400 flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-white">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Crafting visual stories
              </h3>
              <p className="py-2">
                Have a vision for your next video? I'll help you turn it into a
                reality with collaboration and creativity.
              </p>
              <h4 className="py-4 text-white">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">After Effects</p>
              <p className="text-gray-800 py-1">Premiere Pro</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Game & AR Developer
              </h3>
              <p className="py-2">
                Get ready to play and explore in a whole new game with my custom
                game and AR app creations.
              </p>
              <h4 className="py-4 text-white">Developer Tools I Use</h4>
              <p className="text-gray-800 py-1">Blender</p>
              <p className="text-gray-800 py-1">Unity</p>
              <p className="text-gray-800 py-1">Spark AR</p>
              <p className="text-gray-800 py-1">Visual Studio Code</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I'm a{" "}
              <span className="dark:text-green-300 text-green-500">
                sophomore
              </span>{" "}
              student of ECE at NIT Hamirpur and a{" "}
              <span className="dark:text-green-300 text-green-500">
                game and AR/VR developer and designer
              </span>{" "}
              who is passionate about crafting immersive experiences that
              captivate audiences. With a strong foundation in programming, I
              use my creativity to bring ideas to life and create visually
              stunning content that engages and captivates users. I have a
              particular interest in AR/VR and enjoy pushing the boundaries of
              what's possible with cutting-edge technology. Whether it's
              designing digital worlds or building complex systems, I believe in
              combining code and creativity to create innovative solutions that
              leave a lasting impression.
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-3xl dark:text-white ">Unity Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Welcome to my Unity game development portfolio! As a passionate
              learner, I'm currently exploring different genres and mechanics to
              enhance my skills. My projects showcase my ability to create
              captivating game worlds, ranging from 2D platformers to 3D puzzle
              games. Let's push the boundaries of what's possible in game
              development and create something amazing together!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 pt-5">
            <Image
              src={virtual}
              height="480"
              className="w-full"
              allow="autoplay"
            ></Image>
          </div>
          <div className="mt-5">
            <h3 className="text-3xl dark:text-white ">Animations</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Some of my work samples with After Effects, Premiere Pro and Adobe
              Character Animator.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 pt-5 xl:grid-cols-2">
            <iframe
              src="https://drive.google.com/file/d/1OPmnng3aqva097zb8VUVeERQsIQtwLLA/preview"
              width="500"
              height="480"
              className="w-full"
              allow="autoplay"
            ></iframe>
            <iframe
              src="https://drive.google.com/file/d/1Mzo05mIgoVngrMSsrZAxI0sriefbxjnK/preview"
              width="500"
              height="480"
              allow="autoplay"
              className="w-full"
            ></iframe>
          </div>
          <div className="grid grid-cols-1 gap-10 pt-10 xl:grid-cols-2">
            <iframe
              src="https://drive.google.com/file/d/1fCTqxUcJx0vU_uokgHGnm_RRzHpxDwp_/preview"
              width="500"
              height="480"
              allow="autoplay"
              className="w-full"
            ></iframe>
            <iframe
              src="https://drive.google.com/file/d/1ZF6stbq298X5gjvGsAa_xtdzrxa-KwhP/preview"
              width="500"
              height="480"
              className="w-full"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="mt-5">
            <h3 className="text-3xl dark:text-white ">Design Work</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Feast your eyes on my creative illustrations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 pt-5 xl:grid-cols-2">
            <iframe
              src="https://drive.google.com/file/d/1C3srnQiVk4VLR1e_u799C8AEeWMAmRwn/preview"
              width="500"
              height="480"
              allow="autoplay"
              className="w-full"
            ></iframe>
            <iframe
              src="https://drive.google.com/file/d/1dx5p9DH3mKvgbyg-_paP7iu8R_-NHV_H/preview"
              width="500"
              height="480"
              allow="autoplay"
              className="w-full"
            ></iframe>
          </div>
          <div className="grid grid-cols-1 gap-10 pt-10 xl:grid-cols-2">
            <iframe
              src="https://drive.google.com/file/d/1LMfh7SJI5C5TvFrkRUGW2XWDiiH7aAgA/preview"
              width="500"
              height="480"
              allow="autoplay"
              className="w-full"
            ></iframe>
            <iframe
              src="https://drive.google.com/file/d/1tyVQzganq886KweurBFiNQqi8LeTpS_s/preview"
              width="500"
              height="480"
              allow="autoplay"
              className="w-full"
            ></iframe>
          </div>
        </section>
        <div className="text-center dark:text-white text-2xl py-2 mb-2">
          Let's make something amazing together.
        </div>
        <div className="text-center dark:text-white text-2xl py-2 mb-2">
          Start by saying Hi
        </div>
        <div className="text-center dark:text-white text-2xl py-2 mb-2">
          Email me at:{" "}
          <span className="text-green-500 dark:text-green-300 text-2xl py-2 mb-2">
            rish.09.rp@gmail.com
          </span>
        </div>
        <div className="text-center dark:text-white text-2xl py-2 mb-2">
          Made with ❤️ by Rishabh.
        </div>
      </main>
    </div>
  );
}

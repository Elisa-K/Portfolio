import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className=" my-auto py-0 md:py-8 px-4 lg:py-16 col-span-2 order-last sm:ml-10 lg:ml-0 md:order-first">
          <h2 className="font-giaza text-red-dark text-3xl md:text-4xl lg:text-5xl">
            Elisa Klein
          </h2>

          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              'Développeuse Front-End',
              1500,
              'Développeuse Back-End',
              1500,
              'Développeuse Full-Stack',
              1500,
            ]}
            wrapper="h2"
            speed={50}
            className={
              'mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none text-green-dark   dark:text-white'
            }
            repeat={Infinity}
          />

          <p className="mb-8 text-md font-normal text-green-dark ">
            Passionnée par le développement web, je suis à la recherche d'une
            opportunité pour mettre en pratique mes compétences
          </p>
          <div className="flex flex-row gap-3 space-y-0 justify-left sm:space-x-4">
            <a
              className="py-3 px-4 w-max inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-red-dark text-white uppercase hover:bg-red-light focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              href="#contact"
            >
              Me contacter
            </a>
            <a
              className="py-3 px-4 w-max inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-red-dark text-white uppercase hover:bg-red-light focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              href="/docs/CV-Elisa-Klein-Developpeur-Web.pdf"
              target="blank"
            >
              Mon CV
            </a>
          </div>
        </div>
        <div className="">
          <img
            src="../img/avatar.png"
            alt="avatar-Elisa Klein"
            className="w-60 lg:w-96 float-right"
          />
        </div>
      </div>
      <div className="mt-16 hidden md:block">
        <a href="#apropos">
          <svg
            className="animate-bounce w-6 h-6 mx-auto text-green-dark-700 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 7 4 4 4-4M1 1l4 4 4-4"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

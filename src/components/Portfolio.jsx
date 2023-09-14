import { useState, useEffect } from 'react'
import projects from '../assets/data/projects'
import Modal from './common/Modal'

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState(projects)
  const [selectTab, setSelectedTab] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [activeID, setActiveID] = useState(null)

  const showModalHandler = (id) => {
    setShowModal(true)
    setActiveID(id)
  }

  useEffect(() => {
    switch (selectTab) {
      case 'all':
        return setPortfolio(projects)
      case 'HTML/CSS':
        return setPortfolio(
          projects.filter((item) => item.category === 'HTML/CSS'),
        )
      case 'wordpress':
        return setPortfolio(
          projects.filter((item) => item.category === 'Wordpress'),
        )
      case 'php/symfony':
        return setPortfolio(
          projects.filter((item) => item.category === 'PHP/Symfony'),
        )
      case 'reactjs':
        return setPortfolio(
          projects.filter((item) => item.category === 'ReactJS'),
        )
      case 'autre':
        return setPortfolio(
          projects.filter((item) => item.category === 'Autre'),
        )
      default:
        return setPortfolio(projects)
    }
  }, [selectTab])

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  return (
    <div className="text-center h-full flex flex-col justify-center items-center ">
      <h2 className="text-3xl uppercase text-center text-red-dark font-bold">
        Portfolio
      </h2>
      <hr className="w-16 h-1 mx-auto mt-1 mb-16 bg-red-light border-0  dark:bg-gray-700" />
      <div className="container">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedTab('all')}
            className="text-gray-800 border border-solid border-green-dark py-2 px-4 rounded-[8px] hover:bg-green-dark hover:text-white focus:bg-green-dark focus:text-white"
          >
            Tout
          </button>
          <button
            onClick={() => setSelectedTab('HTML/CSS')}
            className="text-gray border border-solid border-green-dark py-2 px-4 rounded-[8px] hover:bg-green-dark hover:text-white focus:bg-green-dark focus:text-white"
          >
            HTML/CSS
          </button>
          <button
            onClick={() => setSelectedTab('wordpress')}
            className="text-gray border border-solid border-green-dark py-2 px-4 rounded-[8px] hover:bg-green-dark hover:text-white focus:bg-green-dark focus:text-white"
          >
            Wordpress
          </button>
          <button
            onClick={() => setSelectedTab('php/symfony')}
            className="text-gray border border-solid border-green-dark py-2 px-4 rounded-[8px] hover:bg-green-dark hover:text-white focus:bg-green-dark focus:text-white"
          >
            PHP/Symfony
          </button>
          <button
            onClick={() => setSelectedTab('reactjs')}
            className="text-gray border border-solid border-green-dark py-2 px-4 rounded-[8px] hover:bg-green-dark hover:text-white focus:bg-green-dark focus:text-white"
          >
            ReactJS
          </button>
          <button
            onClick={() => setSelectedTab('autre')}
            className="text-gray border border-solid border-green-dark py-2 px-4 rounded-[8px] hover:bg-green-dark hover:text-white focus:bg-green-dark focus:text-white"
          >
            Autre
          </button>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap mt-12">
          {portfolio?.map((project) => (
            <div
              key={project.id}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-[90%] sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  src={project.imgURL}
                  alt={project.title}
                  className="rounded-[8px]"
                />
              </figure>
              <div className="w-full h-full rounded-[8px] bg-gray-900 bg-opacity-60 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <h3 className="text-2xl text-white font-bold drop-shadow-2xl mb-3">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => showModalHandler(project.id)}
                    className="text-white uppercase bg-red-dark hover:bg-red-light py-2 px-4 rounded-full font-[500] ease-in duration-200"
                    data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                  >
                    en savoir plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <Modal activeID={activeID} setShowModal={setShowModal} />}
    </div>
  )
}

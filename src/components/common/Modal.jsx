import projects from '../../assets/data/projects'

export default function Modal({ activeID, setShowModal }) {
  const project = projects.find((project) => project.id === activeID)
  return (
    <div className="w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden  text-left bg-black bg-opacity-70 animate-fade-down animate-duration-300 animate-ease-in animate-normal animate-fill-forwards">
      <div className="min-w-[350px] md:max-w-[600px] absolute top-1/2 left-1/2 z-[70] bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2">
        <div className=" relative">
          <div className="flex justify-between items-center py-3 px-4 ">
            <img
              src={project.imgURL}
              alt={project.title}
              className="rounded-[8px]"
            />
          </div>
          <div className="modal-body p-4 max-h-[50vh] overflow-y-auto">
            <div className="space-y-4 space-x-2">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {project.type}
              </span>
              <h2 className="text-2xl font-[700] mb-5">{project.title}</h2>
              <div
                className="text-[15px] leading-7"
                dangerouslySetInnerHTML={{
                  __html: project.description,
                }}
              ></div>
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                <h4 className="text-[18px] text-[700]">Technologies:</h4>
                {project.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 py-2 px-2 rounded-[5px] text-[14px] leading-0"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                {project.siteURL && (
                  <a href={project.siteURL} target="_blank">
                    <button
                      type="button"
                      className="py-3 px-4 w-max inline-flex justify-center items-center gap-2 rounded-[8px] border border-transparent font-semibold bg-red-dark text-white uppercase hover:bg-red-light focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      <i className="fa-solid fa-link text-lg"></i>
                    </button>
                  </a>
                )}
                {project.githubURL && (
                  <a href={project.githubURL} target="_blank">
                    <button
                      type="button"
                      className="py-3 px-4 w-max inline-flex justify-center items-center gap-2 rounded-[8px] border border-transparent font-semibold bg-red-dark text-white uppercase hover:bg-red-light focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      <i className="fa-brands fa-github text-lg"></i>
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  )
}

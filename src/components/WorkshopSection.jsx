import React from "react";
import { Link } from "react-router-dom";

const WorkshopSection = ({ workshops }) => {
  const upcomingWorkshops = workshops.slice(0, 2);

  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">
            Aprenda na Prática
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
            Próximos Workshops
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Participe de sessões interativas online e aprenda diretamente com
            especialistas em desenvolvimento sustentável.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {upcomingWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={workshop.image}
                  alt={workshop.title}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      {workshop.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        workshop.online
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {workshop.online ? "Online" : "Presencial"}
                    </span>
                  </div>
                  <Link to={`/workshops/${workshop.id}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {workshop.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {workshop.description}
                    </p>
                  </Link>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-600">
                      {new Date(workshop.date).toLocaleDateString("pt-BR")} |{" "}
                      {workshop.time}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-600">
                      {workshop.instructor}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-600">
                      {workshop.spotsAvailable} vagas disponíveis de{" "}
                      {workshop.spots}
                    </div>
                    <Link
                      to={`/workshops/${workshop.id}`}
                      className="btn btn-primary"
                    >
                      Inscrever-se
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/workshops"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            Ver todos os workshops
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;

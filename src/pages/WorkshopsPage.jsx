/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Container from "../components/layout/Container";
import workshops from "../data/workshops";

const WorkshopsPage = () => {
  const [filter, setFilter] = useState("all"); // 'all', 'upcoming', 'past'

  // Obter a data atual para filtrar workshops passados e futuros
  const currentDate = new Date();

  // Filtrar os workshops com base na seleção
  const filteredWorkshops = workshops.filter((workshop) => {
    const workshopDate = new Date(workshop.date);
    if (filter === "upcoming") {
      return workshopDate >= currentDate;
    } else if (filter === "past") {
      return workshopDate < currentDate;
    }
    return true; // 'all'
  });

  return (
    <div className="bg-gray-50 py-10">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Workshops
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Participe de sessões interativas para aprofundar seus conhecimentos
            em desenvolvimento sustentável.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex shadow-sm rounded-md">
            <button
              type="button"
              className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                filter === "all"
                  ? "text-primary-600 z-10"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("all")}
            >
              Todos
            </button>
            <button
              type="button"
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                filter === "upcoming"
                  ? "text-primary-600 z-10"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("upcoming")}
            >
              Próximos
            </button>
            <button
              type="button"
              className={`relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                filter === "past"
                  ? "text-primary-600 z-10"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("past")}
            >
              Passados
            </button>
          </div>
        </div>

        <div className="mt-8">
          {filteredWorkshops.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">
                Nenhum workshop encontrado para os critérios selecionados.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredWorkshops.map((workshop) => (
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
                      <h3 className="mt-2 text-xl font-semibold text-gray-900">
                        {workshop.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">
                        {workshop.description}
                      </p>
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
                          {new Date(workshop.date).toLocaleDateString("pt-BR")}{" "}
                          | {workshop.time}
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
                          {new Date(workshop.date) >= currentDate
                            ? `${workshop.spotsAvailable} vagas disponíveis de ${workshop.spots}`
                            : "Workshop finalizado"}
                        </div>
                        {new Date(workshop.date) >= currentDate && (
                          <button className="btn btn-primary">
                            Inscrever-se
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Quer propor um workshop?
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Se você é especialista em desenvolvimento sustentável e gostaria de
            compartilhar seu conhecimento, entre em contato conosco.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Propor um workshop
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkshopsPage;

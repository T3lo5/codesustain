import React, { useState } from "react";
import Container from "../components/layout/Container";
import TutorialCard from "../components/TutorialCard";
import tutorials from "../data/tutorials";

const TutorialsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const categories = [
    ...new Set(tutorials.map((tutorial) => tutorial.category)),
  ];
  const levels = [...new Set(tutorials.map((tutorial) => tutorial.level))];

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch =
      searchTerm === "" ||
      tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "" || tutorial.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "" || tutorial.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="bg-gray-50 py-10">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tutoriais
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Aprenda técnicas de desenvolvimento sustentável com nossos tutoriais
            detalhados e práticos.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="search" className="sr-only">
                Buscar tutoriais
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Buscar por título, descrição ou tags"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div>
                <label htmlFor="category" className="sr-only">
                  Categoria
                </label>
                <select
                  id="category"
                  name="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="focus:ring-primary-500 focus:border-primary-500 h-full py-0 pl-2 pr-7 border-gray-300 bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option value="">Todas categorias</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="level" className="sr-only">
                  Nível
                </label>
                <select
                  id="level"
                  name="level"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="focus:ring-primary-500 focus:border-primary-500 h-full py-0 pl-2 pr-7 border-gray-300 bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option value="">Todos níveis</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          {filteredTutorials.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">
                Nenhum tutorial encontrado com os critérios selecionados.
              </p>
              <button
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                  setSelectedLevel("");
                }}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTutorials.map((tutorial) => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TutorialsPage;

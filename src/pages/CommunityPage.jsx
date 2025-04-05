/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "../components/layout/Container";

const CommunityPage = () => {
  return (
    <div className="bg-gray-50 py-10">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comunidade
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Junte-se a outros desenvolvedores comprometidos com práticas
            sustentáveis e compartilhe conhecimento.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Entre para nossa comunidade
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                Ao participar, você terá acesso a conteúdo exclusivo, fóruns de
                discussão e eventos especiais.
              </p>
            </div>
            <form className="mt-8">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome completo
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="areas"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Áreas de interesse
                  </label>
                  <div className="mt-1">
                    <select
                      id="areas"
                      name="areas"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    >
                      <option>Desenvolvimento Web</option>
                      <option>Mobile</option>
                      <option>Backend</option>
                      <option>DevOps</option>
                      <option>Banco de Dados</option>
                      <option>Todas as áreas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Por que você está interessado em desenvolvimento
                    sustentável?
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Participar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Fórum de Discussão
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Participe de conversas sobre desenvolvimento sustentável,
                compartilhe experiências e tire dúvidas.
              </p>
              <div className="mt-4">
                <a href="#" className="text-primary-600 hover:text-primary-500">
                  Acessar fórum &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Blog da Comunidade
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Leia e contribua com artigos sobre boas práticas, estudos de
                caso e novas técnicas.
              </p>
              <div className="mt-4">
                <a href="#" className="text-primary-600 hover:text-primary-500">
                  Ler o blog &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Recursos Compartilhados
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Acesse bibliotecas, ferramentas e exemplos de código que seguem
                práticas sustentáveis.
              </p>
              <div className="mt-4">
                <a href="#" className="text-primary-600 hover:text-primary-500">
                  Explorar recursos &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary-50 p-6 rounded-lg">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Eventos da Comunidade
              </h2>
              <p className="mt-2 text-lg text-gray-500">
                Participe de encontros virtuais, hackathons e outros eventos
                focados em desenvolvimento sustentável.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Ver próximos eventos
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommunityPage;

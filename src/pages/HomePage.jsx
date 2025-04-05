import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TutorialSection from "../components/TutorialSection";
import WorkshopSection from "../components/WorkshopSection";
import CarbonCalculator from "../components/CarbonCalculator";
import Container from "../components/layout/Container";
import tutorials from "../data/tutorials";
import workshops from "../data/workshops";

const HomePage = () => {
  return (
    <div>
      <Hero />

      <Features />

      <TutorialSection tutorials={tutorials} />

      <div className="bg-white py-12 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">
              Ferramentas
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Calculadora de Impacto Ambiental
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Estime o consumo de energia e as emissões de CO₂ do seu código com
              base em diferentes linguagens e cenários.
            </p>
          </div>

          <CarbonCalculator />
        </Container>
      </div>

      <WorkshopSection workshops={workshops} />

      <div className="bg-white py-12 md:py-20">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">
                Contribua para um futuro sustentável
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Junte-se à nossa comunidade
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Compartilhe conhecimento, participe de discussões e colabore em
                projetos que promovem práticas de desenvolvimento sustentável.
              </p>
              <div className="mt-6">
                <a
                  href="/community"
                  className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Participar da comunidade
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-100 rounded-lg p-6 md:p-10">
                <h3 className="text-lg font-medium text-gray-900">
                  Benefícios de participar
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Acesso a conteúdo exclusivo e atualizações sobre novas
                      práticas
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Oportunidade de colaborar em projetos de código aberto
                      sustentáveis
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Networking com profissionais e especialistas na área
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Certificação e reconhecimento para projetos que seguem
                      práticas sustentáveis
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;

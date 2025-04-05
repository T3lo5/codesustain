import React from "react";
import Container from "../components/layout/Container";
import CarbonCalculator from "../components/CarbonCalculator";
import { optimizationTips } from "../data/carbonData";

const CalculatorPage = () => {
  return (
    <div className="bg-gray-50 py-10">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Calculadora de Impacto Ambiental
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Estime o consumo de energia e emissões de CO₂ do seu código com base
            em diferentes fatores.
          </p>
        </div>

        <div className="mt-10">
          <CarbonCalculator />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">
            Entenda os resultados
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Consumo de Energia
              </h3>
              <p className="mt-2 text-base text-gray-500">
                O consumo diário de energia é calculado com base na eficiência
                da linguagem, tipo de operação e volume de operações. Valores
                mais baixos indicam menor impacto ambiental.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Emissões de CO₂
              </h3>
              <p className="mt-2 text-base text-gray-500">
                As emissões de dióxido de carbono são calculadas com base na
                matriz energética da região do servidor e no consumo de energia
                do código. Representa a pegada de carbono da sua aplicação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Impacto a Longo Prazo
              </h3>
              <p className="mt-2 text-base text-gray-500">
                As emissões anuais mostram o impacto acumulado do seu código ao
                longo do tempo. Pequenas melhorias podem resultar em grandes
                economias em escala.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">
            Dicas para otimização
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Implementando estas práticas, você pode reduzir significativamente o
            consumo de recursos e o impacto ambiental do seu código:
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {optimizationTips.map((tip, index) => (
              <div key={index} className="flex items-start">
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
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary-50 rounded-lg p-6">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Quer aprender mais sobre desenvolvimento sustentável?
              </h2>
              <p className="mt-2 text-lg text-gray-500">
                Explore nossos tutoriais e participe dos workshops para
                aprofundar seus conhecimentos.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:flex md:space-x-4">
              <a
                href="/tutorials"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Ver tutoriais
              </a>
              <a
                href="/workshops"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
              >
                Workshops
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CalculatorPage;

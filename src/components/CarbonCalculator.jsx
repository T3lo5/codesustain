/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  languageEfficiency,
  operationTypes,
  serverLocations,
  optimizationTips,
} from "../data/carbonData";

const CarbonCalculator = () => {
  const [language, setLanguage] = useState("JavaScript");
  const [operationType, setOperationType] = useState("Requisição HTTP");
  const [serverLocation, setServerLocation] = useState("América do Sul");
  const [operationsPerDay, setOperationsPerDay] = useState(10000);
  const [tips, setTips] = useState([]);
  const [result, setResult] = useState({
    energyConsumption: 0,
    co2Emissions: 0,
    yearlyEmissions: 0,
  });

  useEffect(() => {
    const shuffled = [...optimizationTips].sort(() => 0.5 - Math.random());
    setTips(shuffled.slice(0, 3));
  }, []);

  useEffect(() => {
    calculateImpact();
  }, [language, operationType, serverLocation, operationsPerDay]);

  const calculateImpact = () => {
    const selectedLanguage = languageEfficiency.find(
      (l) => l.language === language
    );
    const selectedOperation = operationTypes.find(
      (o) => o.name === operationType
    );
    const selectedLocation = serverLocations.find(
      (l) => l.region === serverLocation
    );

    if (!selectedLanguage || !selectedOperation || !selectedLocation) return;

    const dailyEnergyConsumption =
      selectedLanguage.energyPerOperation *
      selectedOperation.multiplier *
      selectedLocation.multiplier *
      operationsPerDay;

    const dailyCO2Emissions =
      ((selectedLanguage.co2PerMillion * operationsPerDay) / 1000000) *
      selectedOperation.multiplier *
      selectedLocation.multiplier;

    const yearlyCO2Emissions = dailyCO2Emissions * 365;

    setResult({
      energyConsumption: dailyEnergyConsumption.toFixed(2),
      co2Emissions: dailyCO2Emissions.toFixed(4),
      yearlyEmissions: yearlyCO2Emissions.toFixed(2),
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-primary-600 py-4 px-6">
        <h2 className="text-xl font-bold text-white">
          Calculadora de Impacto Ambiental
        </h2>
        <p className="text-primary-100 mt-1">
          Estime o consumo de energia e emissões de CO₂ do seu código
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Linguagem de Programação
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              {languageEfficiency.map((lang) => (
                <option key={lang.language} value={lang.language}>
                  {lang.language}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Operação
            </label>
            <select
              value={operationType}
              onChange={(e) => setOperationType(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              {operationTypes.map((op) => (
                <option key={op.name} value={op.name}>
                  {op.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Localização do Servidor
            </label>
            <select
              value={serverLocation}
              onChange={(e) => setServerLocation(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              {serverLocations.map((loc) => (
                <option key={loc.region} value={loc.region}>
                  {loc.region}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Operações por Dia
            </label>
            <input
              type="number"
              min="1"
              value={operationsPerDay}
              onChange={(e) => setOperationsPerDay(Number(e.target.value))}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            />
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900">Resultados</h3>

          <dl className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <dt className="text-sm font-medium text-gray-500">
                Consumo de Energia Diário
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-primary-600">
                {result.energyConsumption} Wh
              </dd>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <dt className="text-sm font-medium text-gray-500">
                Emissões de CO₂ Diárias
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-primary-600">
                {result.co2Emissions} kg
              </dd>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <dt className="text-sm font-medium text-gray-500">
                Emissões de CO₂ Anuais
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-primary-600">
                {result.yearlyEmissions} kg
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900">
            Dicas de Otimização
          </h3>
          <ul className="mt-4 space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-700">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;

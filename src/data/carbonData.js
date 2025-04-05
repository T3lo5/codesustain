const languageEfficiency = [
  { language: "C", energyPerOperation: 1, co2PerMillion: 0.002 },
  { language: "Rust", energyPerOperation: 1.03, co2PerMillion: 0.0021 },
  { language: "C++", energyPerOperation: 1.34, co2PerMillion: 0.0026 },
  { language: "Java", energyPerOperation: 1.98, co2PerMillion: 0.0039 },
  { language: "JavaScript", energyPerOperation: 4.45, co2PerMillion: 0.0088 },
  { language: "Python", energyPerOperation: 75.88, co2PerMillion: 0.1496 },
];

const operationTypes = [
  { name: "Requisição HTTP", multiplier: 2.5 },
  { name: "Consulta de banco de dados", multiplier: 3.2 },
  { name: "Renderização de interface", multiplier: 1.8 },
  { name: "Processamento de dados", multiplier: 4.0 },
  { name: "Operações de arquivo", multiplier: 2.1 },
];

const serverLocations = [
  { region: "América do Norte", multiplier: 1.0 },
  { region: "Europa", multiplier: 0.85 },
  { region: "América do Sul", multiplier: 1.2 },
  { region: "Ásia", multiplier: 1.3 },
  { region: "Oceania", multiplier: 1.15 },
];

const optimizationTips = [
  "Utilize técnicas de lazy loading para carregar recursos apenas quando necessário",
  "Implemente cache para reduzir consultas repetitivas ao servidor",
  "Minimize o uso de loops aninhados e operações O(n²)",
  "Prefira linguagens e frameworks com menor consumo energético",
  "Utilize servidores em regiões com maior porcentagem de energia renovável",
  "Implemente code splitting para reduzir o tamanho inicial dos pacotes JavaScript",
  "Otimize consultas de banco de dados para reduzir processamento",
  "Comprima imagens e recursos estáticos para reduzir transferência de dados",
  "Minimize o uso de bibliotecas e frameworks desnecessários",
  "Implemente estratégias de throttling e debouncing para eventos frequentes",
];

export {
  languageEfficiency,
  operationTypes,
  serverLocations,
  optimizationTips,
};

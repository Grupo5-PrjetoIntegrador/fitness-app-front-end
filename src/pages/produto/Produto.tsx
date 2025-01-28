import { useState } from "react";
import { motion } from "framer-motion";

const exercises = [
  { id: 1, name: "Flexão", category: "Peito", img: "https://www.hospitaldaluz.pt/Portals/_default/SiteData/GlobalAssets/Sa%C3%BAde%20e%20bem-estar/Imagens/2024/flexoes-tradicionais-01.png?ver=ZQ6PMt-_hyv6Xd_Ov03NvQ%3D%3D" },
  { id: 2, name: "Agachamento", category: "Pernas", img: "https://static.vecteezy.com/ti/vetor-gratis/p1/8631412-mulher-fazendo-peso-corporal-agachamento-exercicio-plano-ilustracao-isolado-em-fundo-branco-vetor.jpg" },
  { id: 3, name: "Prancha", category: "Core", img: "https://cdn-icons-png.flaticon.com/512/2647/2647643.png" },
];

export default function ExerciseOptions() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");

  const filteredExercises = exercises.filter(
    (ex) =>
      (filter === "Todos" || ex.category === filter) &&
      ex.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Opções de Exercícios</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Buscar exercício..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={() => setFilter("Todos")} className="bg-gray-200 p-2 rounded">Todos</button>
        <button onClick={() => setFilter("Peito")} className="bg-gray-200 p-2 rounded">Peito</button>
        <button onClick={() => setFilter("Pernas")} className="bg-gray-200 p-2 rounded">Pernas</button>
        <button onClick={() => setFilter("Core")} className="bg-gray-200 p-2 rounded">Core</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredExercises.map((ex) => (
          <motion.div
            key={ex.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-2xl shadow-lg cursor-pointer"
          >
            <img src={ex.img} alt={ex.name} className="w-full h-40 object-contain rounded-xl mb-2" />
            <h2 className="text-lg font-semibold">{ex.name}</h2>
            <p className="text-sm text-gray-500">{ex.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
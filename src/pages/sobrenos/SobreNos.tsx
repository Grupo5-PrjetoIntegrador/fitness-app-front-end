import React from "react";

function SobreNos() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="max-w-4xl w-full text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre Nós</h1>
        <p className="text-lg text-gray-600 mb-6">
          Bem-vindo ao nosso aplicativo de fitness! Nosso objetivo é ajudar você a
          alcançar seus objetivos de saúde e bem-estar por meio de ferramentas
          intuitivas e práticas para acompanhar seus treinos e progresso.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full px-4">
        <div className="bg-white p-6 shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Nossa Missão</h2>
          <p className="text-gray-600">
            Capacitar indivíduos a atingir seus objetivos de saúde e fitness,
            oferecendo um acompanhamento personalizado e soluções inovadoras.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Nossos Valores</h2>
          <p className="text-gray-600">
            Acreditamos em dedicação, disciplina e inovação. Nosso compromisso é
            tornar sua jornada fitness mais motivadora e eficiente.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Nossa Equipe</h2>
          <p className="text-gray-600">
            Somos uma equipe apaixonada por tecnologia e bem-estar, unindo forças
            para criar a melhor experiência para nossos usuários.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Junte-se a Nós</h2>
          <p className="text-gray-600">
            Queremos que você faça parte dessa jornada. Entre em contato conosco e
            compartilhe suas ideias e histórias de sucesso.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-4xl w-full px-4">
        <img
          src="dev-team.jpg"
          alt="Equipe Fitness"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>
    </div>
    </>
  )
}

export default SobreNos

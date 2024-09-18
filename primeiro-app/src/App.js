import { useState } from "react";

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador');

  return (
    <div className="App">
       <h1>Bem-vindo ao meu projeto</h1>
       <h2>Olá: {aluno}</h2>
    </div>
  );
}

export default App;
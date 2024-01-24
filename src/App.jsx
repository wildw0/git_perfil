import { useState } from "react";

import Perfil from "./components/Perfil/Index";
import Formulario from "./components/Formulario/index";
import RepoList from "./components/Reposlist";


function App() {
  const [formularioEstaVisivel, setFormularioEstavisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('')
  
  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
  
    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <RepoList nomeUsuario={nomeUsuario}/>
      </>
  )}
</>
  )}
export default App

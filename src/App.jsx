import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import Formulario from './components/Formulario'
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const localPacientes = JSON.parse(localStorage.getItem('pacientes') ?? '[]');
    setPacientes(localPacientes)
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  

  //methods
  const deletePaciente = (id) => {
    const filtro = pacientes.filter( data => data.id !== id)
    setPacientes(filtro)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
        />
      </div>
    </div>
  )
}

export default App

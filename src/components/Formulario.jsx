import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  // hooks
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  

  // methods
  const generarId = () => { 
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)
    return fecha + random
  }
  const handleSubmit = (e) => { 
    e.preventDefault()
    // Validacion Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return
    }
    const datos = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }
    if (paciente.id) {
      datos.id = paciente.id
      const pacientesUpdate = pacientes.map( data => data.id === datos.id ? datos : data)
      setPacientes(pacientesUpdate)
      setPaciente({})
    } else {
      datos.id = generarId()
      setPacientes([...pacientes, datos])
    }
    // Reiniciar Form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    setError(false)
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-center mt-5 text-lg mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form 
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        onSubmit={handleSubmit}
      >
        { error && <Error mensaje='Todos los campos son obligatorios' /> }
        <div className='mb-5'>
          <label 
            htmlFor='mascota'
            className='block text-gray-700 font-bold uppercase'
          >
            Nombre Mascota
          </label>
          <input 
            id='mascota'
            type='text'
            value={nombre}
            placeholder='Nombre de la Mascota'
            onChange={ (e) => setNombre(e.target.value) }
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounde-md'
          />
        </div>
        <div className='mb-5'>
          <label 
            htmlFor='propietario'
            className='block text-gray-700 font-bold uppercase'
          >
            Nombre Propietario
          </label>
          <input 
            id='propietario'
            type='text'
            value={propietario}
            placeholder='Nombre del Propietario'
            onChange={ (e) => setPropietario(e.target.value) }
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounde-md'
          />
        </div>
        <div className='mb-5'>
          <label 
            htmlFor='email'
            className='block text-gray-700 font-bold uppercase'
          >
            Email
          </label>
          <input 
            id='email'
            type='email'
            value={email}
            placeholder='Email Contacto Propietario'
            onChange={ (e) => setEmail(e.target.value) }
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounde-md'
          />
        </div>
        <div className='mb-5'>
          <label 
            htmlFor='alta'
            className='block text-gray-700 font-bold uppercase'
          >
            Alta
          </label>
          <input 
            id='alta'
            type='date'
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounde-md'
          />
        </div>
        <div className='mb-5'>
          <label 
            htmlFor='sintomas'
            className='block text-gray-700 font-bold uppercase'
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
            placeholder="Describe los Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  )
}

export default Formulario
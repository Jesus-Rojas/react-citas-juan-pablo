import { useState } from 'react'

const Formulario = () => {
  // hooks
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  // methods
  const handleSubmit = (e) => { 
    e.preventDefault()
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      
    }

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
          value='Agregar Paciente'
        />
      </form>
    </div>
  )
}

export default Formulario
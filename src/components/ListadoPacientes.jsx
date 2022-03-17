import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, deletePaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl"> Listado Pacientes </h2>
          <p className="text-xl text-center mt-5 mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map(item => (
            <Paciente 
              key={item.id}
              paciente={item}
              setPaciente={setPaciente}
              deletePaciente={deletePaciente}
            />
          ))}
        </>
        ) : (
          <>
            <h2 className="font-black text-center text-3xl"> No hay pacientes </h2>
            <p className="text-xl text-center mt-5 mb-10">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ListadoPacientes
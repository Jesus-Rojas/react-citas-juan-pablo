const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white px-5 py-10 shadow-md rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">Jesus</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
        <span className="font-normal normal-case">asd@asd.asd</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
        <span className="font-normal normal-case">12-12-2020</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, reiciendis? Voluptatum a est, placeat doloremque aliquid cupiditate labore animi, veritatis consequatur aut tenetur inventore deleniti sed quasi dolor quam aperiam?</span>
      </p>
    </div>
  )
}

export default Paciente
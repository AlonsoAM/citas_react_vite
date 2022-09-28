import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // console.log(pacientes && pacientes.length);

  return (
    <>
      {pacientes && pacientes.length ? (
        <>
          <div className="md:w-1/2 lg:w-3/5 mx-5">
            <h2 className="font-black text-3xl text-center">
              Listado Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus{" "}
              <span className="text-indigo-600 font-bold">
                Pacientes y Citas
              </span>
            </p>
            <div className="md:h-screen overflow-y-scroll">
              {pacientes.map((paciente) => (
                <Paciente
                  paciente={paciente}
                  key={paciente.id}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                ></Paciente>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 lg:w-3/5 mx-5">
            <h2 className="font-black text-3xl text-center">
              No hay Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes y{" "}
              <span className="text-indigo-600 font-bold">
                aparecerán en este lugar
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ListadoPacientes;

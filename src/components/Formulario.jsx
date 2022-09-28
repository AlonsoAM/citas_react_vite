import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  // console.log(paciente);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      // console.log(paciente);
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarID = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    // Si formulario es válido se setea el error a false y continua el flujo
    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro

      // Llenar el arreglo de pacientes
      objetoPaciente.id = generarID();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y{" "}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          {error && (
            <Error mensaje={"Todos los campos son obligatorios"}></Error>
          )}
          {/* Input Mascota */}
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="mascota"
            >
              Nombre Mascota
            </label>
            <input
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="mascota"
              id="mascota"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          {/* Input Propietario */}
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="propietario"
            >
              Nombre Propietario
            </label>
            <input
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="propietario"
              id="propietario"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          {/* Email Propietario */}
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Fecha de Alta */}
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="alta"
            >
              Alta
            </label>
            <input
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="alta"
              id="alta"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          {/* Síntomas */}
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="sintomas"
            >
              Síntomas
            </label>
            <textarea
              id="sintomas"
              name="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los síntomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            ></textarea>
          </div>
          {/* Botón */}
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;

import React, { useState } from "react";

const Unete = () => {
  const [taxis, setTaxis] = useState([]);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [placa, setPlaca] = useState("");
  const [tarjetaPropiedad, setTarjetaPropiedad] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [cedulaPropietario, setCedulaPropietario] = useState("");

  const handleAddTaxi = () => {
    const newTaxi = {
      marca: marca,
      modelo: modelo,
      cilindraje: cilindraje,
      placa: placa,
      tarjetaPropiedad: tarjetaPropiedad,
      propietario: {
        nombre: nombrePropietario,
        cedula: cedulaPropietario,
      },
    };

    setTaxis([...taxis, newTaxi]);

    // Reiniciar los campos del formulario
    setMarca("");
    setModelo("");
    setCilindraje("");
    setPlaca("");
    setTarjetaPropiedad("");
    setNombrePropietario("");
    setCedulaPropietario("");
  };

  const handleDeleteTaxi = (index) => {
    const updatedTaxis = [...taxis];
    updatedTaxis.splice(index, 1);
    setTaxis(updatedTaxis);
  };

  return (
    <div>
      <h1>Registrate</h1>
      <h2>Crear Taxi</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Marca:</label>
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </div>
        <div>
          <label>Modelo:</label>
          <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        </div>
        <div>
          <label>Cilindraje:</label>
          <input type="text" value={cilindraje} onChange={(e) => setCilindraje(e.target.value)} />
        </div>
        <div>
          <label>Placa:</label>
          <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        </div>
        <div>
          <label>Tarjeta de Propiedad:</label>
          <input type="text" value={tarjetaPropiedad} onChange={(e) => setTarjetaPropiedad(e.target.value)} />
        </div>
        <div>
          <label>Nombre del Propietario:</label>
          <input type="text" value={nombrePropietario} onChange={(e) => setNombrePropietario(e.target.value)} />
        </div>
        <div>
          <label>Cédula del Propietario:</label>
          <input type="text" value={cedulaPropietario} onChange={(e) => setCedulaPropietario(e.target.value)} />
        </div>
        <button onClick={handleAddTaxi}>Agregar Taxi</button>
      </form>

      <h2>Taxis Registrados</h2>
      <table>
        <thead>
          <tr>
            <th> Marca</th>
            <th>Modelo</th>
            <th>Cilindraje</th>
            <th>Placa</th>
            <th>Tarjeta de Propiedad</th>
            <th>Propietario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {taxis.map((taxi, index) => (
            <tr key={index}>
              <td>{taxi.marca}</td>
              <td>{taxi.modelo}</td>
              <td>{taxi.cilindraje}</td>
              <td>{taxi.placa}</td>
              <td>{taxi.tarjetaPropiedad}</td>
              <td>{`${taxi.propietario.nombre} (${taxi.propietario.cedula})`}</td>
              <td>
                <button onClick={() => handleDeleteTaxi(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Unete;
import React from 'react';
import '../styles/AddressData.css';

const AddressData = () => {
  return (
    <form>
      <div className="form-section">
        <h2>Dirección de Habitación</h2>
        <div className="form-group">
          <label htmlFor="pais-habitacion">País</label>
          <select id="pais-habitacion" name="pais-habitacion">
            <option value="">Seleccione</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="estado-habitacion">Estado</label>
          <select id="estado-habitacion" name="estado-habitacion">
            <option value="">Seleccione</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="municipio-habitacion">Municipio</label>
          <select id="municipio-habitacion" name="municipio-habitacion">
            <option value="">Seleccione</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="parroquia-habitacion">Parroquia</label>
          <select id="parroquia-habitacion" name="parroquia-habitacion">
            <option value="">Seleccione</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="direccion-principal">Direccion Principal</label>
          <input type="text" id="direccion-principal" name="direccion-principal" />
        </div>
        <div className="form-group">
          <label htmlFor="urbanizacion">Urbanizacion</label>
          <input type="text" id="urbanizacion" name="urbanizacion" />
        </div>
        <div className="form-group">
          <label htmlFor="sector">Sector</label>
          <input type="text" id="sector" name="sector" />
        </div>
        <div className="form-group">
          <label htmlFor="otra-direccion">Otra Dirección</label>
          <input type="text" id="otra-direccion" name="otra-direccion" />
        </div>
      </div>

      <div className="form-section">
        <h2>Teléfonos:</h2>
        <div className="form-group">
          <input type="text" id="telefono1" name="telefono1" />
        </div>
        <div className="form-group">
          <input type="text" id="telefono2" name="telefono2" />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="save-button">Guardar Cambios</button>
        <button type="button" className="cancel-button">Cancelar</button>
      </div>
    </form>
  );
};

export default AddressData;

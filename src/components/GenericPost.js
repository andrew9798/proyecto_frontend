import React, { useState } from 'react';

const GenericPost = ({ fields, onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleGuardarClick = async () => {
    try {
      await onSubmit(formValues);
      console.log('Elemento guardado con éxito');
      window.location.reload();     // Recarga la página después de guardar
    } catch (error) {
      console.error('Error al guardar el elemento:', error);
    }
  };

  return (
    <div>
      {fields.map((field) => (
        <div className="mb-3" key={field.name}>
          <label htmlFor={field.name} className="form-label">{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              className="form-control"
              id={field.name}
              rows="3"
              value={formValues[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
            ></textarea>
          ) : (
            <input
              type={field.type || 'text'}
              className="form-control"
              id={field.name}
              value={formValues[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={handleGuardarClick}>
        Guardar
      </button>
    </div>
  );
};

export default GenericPost;
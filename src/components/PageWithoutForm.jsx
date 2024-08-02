import React from 'react';

const PageWithoutForm = () => {
  return (
    <div className="sorteo-container">
      <header className="sorteo-header">
        <h1>¡Gana con Ontario!</h1>
      </header>
      <div className="sorteo-description">
        <h2>Descripción del Sorteo</h2>
        <p>Participa en nuestro sorteo por la compra de tu lote en cualquiera de nuestros proyectos inmobiliarios. ¡Puedes llevarte grandiosos premios!</p>
      </div>
      <div className="sorteo-content">
        <div className="sorteo-steps">
          <h2>¿Cómo puedes participar?</h2>
          <div className="step">
            <h3>Paso 1</h3>
            <p>Compra tu lote en Ontario.</p>
          </div>
          <div className="step">
            <h3>Paso 2</h3>
            <p>Recibe un código único para participar.</p>
          </div>
          <div className="step">
            <h3>Paso 3</h3>
            <p>Ingresa tu código en nuestra página web.</p>
          </div>
        </div>
        <div className="sorteo-participants">
          <h2>Participantes</h2>
          <table className="participants-table">
            <thead>
              <tr>
                <th>Documento</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Código</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>87654321</td>
                <td>María López</td>
                <td>maria_lopez@example.com</td>
                <td>ABCD-1234</td>
              </tr>
              <tr>
                <td>11223344</td>
                <td>Carlos Ruiz</td>
                <td>carlos_ruiz@example.com</td>
                <td>EFGH-5678</td>
              </tr>
              <tr>
                <td>22334455</td>
                <td>Ana Torres</td>
                <td>ana.torres@example.com</td>
                <td>IJKL-9012</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="sorteo-testimonials">
        <h2>Testimonios</h2>
        <div className="testimonial">
          <p>"Gracias a esta promoción, pude comprar el lote de mis sueños y ahora tengo la posibilidad de ganar un auto. ¡Increíble!" - Juan Pérez</p>
        </div>
        <div className="testimonial">
          <p>"La mejor decisión fue invertir en un lote de esta inmobiliaria. Estoy muy emocionada por el sorteo." - María López</p>
        </div>
      </div>
    </div>
  );
};

export default PageWithoutForm;

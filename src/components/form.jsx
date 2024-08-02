import React, { useState, useEffect } from 'react';
import patronVerdeBG from '../assets/img/patronVerdeBG.png'; // Asegúrate de que esta ruta sea correcta
import happyFamily from '../assets/img/happyFamily.png'; // Asegúrate de que esta ruta sea correcta

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        documentType: '',
        documentNumber: '',
        phoneNumber: '',
        project: '',
        termsAccepted: false,
        marketingAccepted: false,
    });

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const styles = {
        formContainer: {
            position: 'relative',
            backgroundImage: `url(${patronVerdeBG})`,
            backgroundSize: 'cover', // Ajusta la imagen al tamaño del contenedor
            backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
            backgroundPosition: 'center', // Centra la imagen
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px 0',
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            overflow: 'hidden', // Para evitar desbordamientos
        },
        row: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: '1100px',
            flexWrap: 'wrap',
            boxSizing: 'border-box',
        },
        column: {
            flex: windowWidth <= 1250 ? '' : '1',
            margin: '10px',
            boxSizing: 'border-box',
            width: '100%',
        },
        textCursive: {
            color: '#273243',
            fontSize: '2em',
            fontWeight: 'bold',
            marginBottom: '5px',
            fontStyle: 'italic',
            textAlign: windowWidth <= 1250 ? 'center' : 'left',
        },
        textNormal: {
            color: '#273243',
            fontSize: '2.7em',
            fontWeight: '800',
            marginBottom: '20px', 
            textAlign: windowWidth <= 1250 ? 'center' : 'left',
        },
        textWhite: {
            color: '#ffffff',
        },
        form: {
            backgroundColor: '#273243',
            padding: '30px',
            borderRadius: '30px',
            width: '100%',
            maxWidth: '529px',
            margin: '0 auto',
            color: 'white',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden',
            marginTop: '60px',
        },
        header: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        highlight: {
            color: '#ADD53D',
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px',
            width: '100%',
        },
        formRow: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px',
            width: '100%',
            flexWrap: 'wrap',
        },
        input: {
            width: 'calc(50% - 10px)',
            minWidth: '100px',
            height: '45px',
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ddd',
            borderRadius: '15px',
            boxSizing: 'border-box',
            color: '#666',
            backgroundColor: '#f9f9f9',
        },
        select: {
            width: 'calc(50% - 10px)',
            minWidth: '100px',
            height: '45px',
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ddd',
            borderRadius: '15px',
            boxSizing: 'border-box',
            color: '#666',
            backgroundColor: '#f9f9f9',
        },
        fullWidthInput: {
            width: '100%',
            height: '48px',
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ddd',
            borderRadius: '15px',
            boxSizing: 'border-box',
            color: '#666',
            backgroundColor: '#f9f9f9',
        },
        label: {
            fontSize: '0.9em',
            display: 'block',
            alignItems: 'center',
        },
        checkbox: {
            marginRight: '10px',
        },
        submitBtnContainer: {
            textAlign: 'center',
            marginTop: '20px',
        },
        submitBtn: {
            backgroundColor: '#ADD53D',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            width: '149px',
            height: '41px',
        },
        submitBtnHover: {
            backgroundColor: '#7FA653',
        },
        phoneNumberContainer: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '48px',
            borderRadius: '15px',
            border: '1px solid #ddd',
            padding: '0 10px',
            boxSizing: 'border-box',
            backgroundColor: '#f9f9f9',
            overflow: 'hidden',
        },
        phoneNumberInput: {
            flex: 1,
            border: 'none',
            height: '100%',
            paddingLeft: '10px',
            color: '#666',
        },
        phoneNumberPrefixContainer: {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
        },
        phoneNumberPrefix: {
            paddingRight: '10px',
            color: '#666',
        },
        phoneNumberSeparator: {
            width: '1px',
            height: '60%',
            backgroundColor: '#ccc',
            margin: '0 10px',
        },
        requiredText: {
            fontSize: '0.8em',
            color: '#ccc',
            marginTop: '5px',
            marginBottom: '15px',
            textAlign: 'left',
            width: '100%',
        },
        image: {
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
        },
        imageContainer: {
            position: 'absolute',
            bottom: '0',
            width: '100%',
            maxWidth: '500px', // Limitar el ancho máximo de la imagen
            textAlign: 'center',
        },
    };

    return (
        <section style={styles.formContainer}>
            <div style={styles.row}>
                <div style={styles.column}>
                    <div style={styles.textCursive}>TU FUTURO </div> 
                    <div style={styles.textNormal}>COMIENZA <span style={styles.textWhite}>AQUÍ</span></div>
                    {windowWidth > 1250 && (
                        <div style={styles.imageContainer}>
                            <img src={happyFamily} alt="Familia feliz" style={styles.image} />
                        </div>
                    )}
                </div>
                <div style={styles.column}>
                    <form style={styles.form} onSubmit={handleSubmit}>
                        <h2 style={styles.header}>
                            QUIERO RECIBIR <span style={styles.highlight}>INFORMACIÓN</span>
                        </h2>
                        <div style={styles.formRow}>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="*Nombres"
                                required
                                style={styles.input}
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="*Apellidos"
                                required
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="*Correo Electrónico"
                                required
                                style={styles.fullWidthInput}
                            />
                        </div>
                        <div style={styles.formRow}>
                            <select
                                name="documentType"
                                value={formData.documentType}
                                onChange={handleChange}
                                required
                                style={styles.select}
                            >
                                <option value="">Documento</option>
                                <option value="dni">DNI</option>
                                <option value="passport">Pasaporte</option>
                            </select>
                            <input
                                type="text"
                                name="documentNumber"
                                value={formData.documentNumber}
                                onChange={handleChange}
                                placeholder="*No. documento"
                                required
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formGroup}>
                            <div style={styles.phoneNumberContainer}>
                                <div style={styles.phoneNumberPrefixContainer}>
                                    <span style={styles.phoneNumberPrefix}>🇵🇪 +51</span>
                                    <div style={styles.phoneNumberSeparator}></div>
                                </div>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="*Teléfono"
                                    required
                                    style={styles.phoneNumberInput}
                                />
                            </div>
                        </div>
                        <div style={styles.formGroup}>
                            <select
                                name="project"
                                value={formData.project}
                                onChange={handleChange}
                                required
                                style={styles.fullWidthInput}
                            >
                                <option value="">*Proyecto</option>
                                <option value="Prado Piamonte">Prado Piamonte</option>
                                <option value="Zafiro">Zafiro</option>
                                <option value="Santorini">Santorini</option>
                                <option value="Mykonos">Mykonos</option>
                                <option value="Coral">Coral</option>
                                <option value="Punta Arena">Punta Arena</option>
                            </select>
                            <div style={styles.requiredText}>(*) Campos obligatorios</div>
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>
                                <input
                                    type="radio"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    required
                                    style={styles.checkbox}
                                />
                                <span style={{ display: 'inline' }}>
                                    Acepto los{' '}
                                    <button
                                        type="button"
                                        style={{
                                            background: 'none',
                                            color: '#ADD53D',
                                            border: 'none',
                                            padding: 0,
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        términos y condiciones
                                    </button>{' '}
                                    y la{' '}
                                    <button
                                        type="button"
                                        style={{
                                            background: 'none',
                                            color: '#ADD53D',
                                            border: 'none',
                                            padding: 0,
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Política de Privacidad
                                    </button>
                                </span>
                            </label>
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>
                                <input
                                    type="radio"
                                    name="marketingAccepted"
                                    checked={formData.marketingAccepted}
                                    onChange={handleChange}
                                    style={styles.checkbox}
                                />
                                Acepto el envío de Publicidad según la Política de Privacidad
                            </label>
                        </div>
                        <div style={styles.submitBtnContainer}>
                            <button
                                type="submit"
                                style={styles.submitBtn}
                                onMouseOver={(e) =>
                                    (e.target.style.backgroundColor = styles.submitBtnHover.backgroundColor)
                                }
                                onMouseOut={(e) =>
                                    (e.target.style.backgroundColor = styles.submitBtn.backgroundColor)
                                }
                            >
                                ENVIAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Form;

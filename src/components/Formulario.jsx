import React, { useState } from 'react';
import API_URL from '../common/constants';
import { Form, Button } from "react-bootstrap";
import './Formulario.css';

const Formulario = () => {
    const initialFormData = {
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        motivo: '',
        descripcion: '',
        objetivos: '',
        publico: '',
        propuesta: '',
        elementos: '',
        cta: '',
        integraciones: '',
        formulario: '',
        testimonios: '',
        promociones: '',
        referencias: '',
        dominio: '',
        seo: '',
        plazo: '',
        presupuesto: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const createForm = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(formData);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(API_URL + "api/formularios/create", requestOptions);
        const result = await response.json();
        console.log(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createForm();
        setFormData(initialFormData); 
    };

    return (
        <Form onSubmit={handleSubmit} className="formulario">
            <h1>Formulario para Desarrollo de Landing Page</h1>
            
            <Form.Group>
                <Form.Label>Nombre Completo:</Form.Label>
                <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Correo Electrónico:</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Teléfono:</Form.Label>
                <Form.Control type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nombre de la Empresa:</Form.Label>
                <Form.Control type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>¿Para qué necesitas la landing page?</Form.Label>
                <Form.Select name="motivo" value={formData.motivo} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="producto">Presentar tu empresa</option>
                    <option value="producto">Promocionar un producto</option>
                    <option value="contacto">Capturar contactos</option>
                    <option value="turnos">Reservar turnos/citas</option>
                    <option value="evento">Informar sobre un evento</option>
                    <option value="otro">Otro</option>
                </Form.Select>
            </Form.Group>

            <Form.Group>
                <Form.Label>Descripción de tu empresa o producto: (2000 caracteres)</Form.Label>
                <Form.Control as="textarea" name="descripcion" value={formData.descripcion} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Objetivos de la landing page:</Form.Label>
                <Form.Control as="textarea" name="objetivos" value={formData.objetivos} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Público objetivo:</Form.Label>
                <Form.Control as="textarea" name="publico" value={formData.publico} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Propuesta de valor:</Form.Label>
                <Form.Control as="textarea" name="propuesta" value={formData.propuesta} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Elementos visuales y multimedia:(Enumerar cantidad de imagenes y videos)</Form.Label>
                <Form.Control as="textarea" name="elementos" value={formData.elementos} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Llamada a la acción (CTA):</Form.Label>
                <Form.Control as="textarea" name="cta" value={formData.cta} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Integraciones necesarias:</Form.Label>
                <Form.Control as="textarea" name="integraciones" value={formData.integraciones} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Formulario de contacto:</Form.Label>
                <Form.Control as="textarea" name="formulario" value={formData.formulario} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Testimonios y opiniones: (Testimonio, nombre y apellido y link del video)</Form.Label>
                <Form.Control as="textarea" name="testimonios" value={formData.testimonios} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Ofertas especiales o promociones:</Form.Label>
                <Form.Control as="textarea" name="promociones" value={formData.promociones} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Referencias:</Form.Label>
                <Form.Control as="textarea" name="referencias" value={formData.referencias} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Dominio y hosting: ($8.700 mensuales)</Form.Label>
                <Form.Control as="textarea" name="dominio" value={formData.dominio} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>SEO y Analytics:</Form.Label>
                <Form.Control as="textarea" name="seo" value={formData.seo} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Plazo:</Form.Label>
                <Form.Control as="textarea" name="plazo" value={formData.plazo} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Presupuesto:</Form.Label>
                <Form.Control as="textarea" name="presupuesto" value={formData.presupuesto} onChange={handleChange} />
            </Form.Group>

            <Button onClick={handleSubmit}>Enviar</Button>
        </Form>
    );
};

export default Formulario;

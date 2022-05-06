import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { withFormik } from "formik";
import * as Yup from "yup";

const formulaireContact = (props) => (
  <div>
    <Form>
      <Form.Group controlId="nom">
        <Form.Label>Nom</Form.Label>
        <Badge bg="info">(min 5 caractères)</Badge>
        <Form.Control
          type="text"
          placeholder="Votre nom"
          name="nom"
          onChange={props.handleChange}
          value={props.values.nom}
          onBlur={props.handleBlur}
        />
        {props.touched.nom && props.errors.nom && (
          <span className="text-danger">{props.errors.nom}</span>
        )}
      </Form.Group>
      <Form.Group controlId="mail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Votre E-mail"
          name="email"
          onChange={props.handleChange}
          value={props.values.email}
          onBlur={props.handleBlur}
        />
        {props.touched.email && props.errors.email && (
          <span className="text-danger">{props.errors.email}</span>
        )}
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Votre message</Form.Label>
        <Badge bg="info">(entre 100 et 200 caractères)</Badge>
        <Form.Control
          as="textarea"
          rows="3"
          name="message"
          onChange={props.handleChange}
          value={props.values.message}
          onBlur={props.handleBlur}
        />
        {props.touched.message && props.errors.message && (
          <span className="text-danger">{props.errors.message}</span>
        )}
      </Form.Group>
      <Button variant="primary" onClick={props.handleSubmit}>
        Valider
      </Button>
    </Form>
  </div>
);

export default withFormik({
  mapPropsToValues: () => ({
    nom: "",
    email: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    nom: Yup.string()
      .min(5, "Le nom doit avoir plus de 5 caractères")
      .required("Le nom est obligatoire"),
    email: Yup.string()
      .email("L'e-mail n'est pas au bon format")
      .required("L'e-mail est obligatoire"),
    message: Yup.string()
      .min(100, "Le message doit faire plus de 100 caractères")
      .max(200, "Le message doit faire moins de 200 caractères")
      .required("Le message est obligatoire"),
  }),
  handleSubmit: (value, { props }) => {
    alert("Message bien envoyé");
  },
})(formulaireContact);

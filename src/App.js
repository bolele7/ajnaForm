import React, { useState,  useRef } from 'react';

import emailjs from 'emailjs-com';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';



const REACT_APP_SERVICE_ID="service_mkvtny1";
const REACT_APP_TEMPLATE_ID="template_lfepf34";
const REACT_APP_USER_ID= "syWh8kveHyI5bsKDW"


function App () {

    const [validated, setValidated] = useState(false);
    const [disabled, setDisabled] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;

      sendEmail(event)
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();

      }
  
      setValidated(true);
    };


      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prise D'information de client potentiel</h1>
      </header>
      <Container>
        <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit}>
        <Stack gap={3}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom du projet</Form.Label>
          <Form.Control type="textarea" placeholder="Entrer le nom du client" 
                    required
                    defaultValue="Mark"
                    name="client_user"/>
          <Form.Control.Feedback type="invalid">
              Entrez un nom svp
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quelle est le type d'activité?</Form.Label>
          <Form.Control type="textarea" placeholder="Boulangerie, coiffeur..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quelle est votre objectif?</Form.Label>
          <Form.Control type="textarea" placeholder="Présence digitale..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seriez vous d'accord pour une séance photo gratuit</Form.Label>
          <Form.Check type="checkbox" label="oui" />
          <Form.Check type="checkbox" label="non" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>-Quel est votre besoin dans la création de contenu pour votre entreprise ?</Form.Label>
          <Form.Check type="checkbox" label="vidéoGraphie" />
          <Form.Check type="checkbox" label="Photographie" />
          <Form.Check type="checkbox" label="Site web" />
          <Form.Check type="checkbox" label="réseaux sociaux" />
          <Form.Check type="checkbox" label="publicité" />
          <Form.Check type="checkbox" label="évènementiel" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Avez-vous une présence sur les réseaux sociaux ?</Form.Label>
          <Form.Check type="checkbox" label="oui" />
          <Form.Check type="checkbox" label="non" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Sur quelles plateformes êtes-vous présent ?</Form.Label>
          <Form.Check type="checkbox" label="Instagram" />
          <Form.Check type="checkbox" label="Facebook" />
          <Form.Check type="checkbox" label="twitter" />
          <Form.Check type="checkbox" label="Google My Business" />
          <Form.Check type="checkbox" label="autre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Est ce que qqn gère vos réseaux sociaux ?/ </Form.Label>
          <Form.Check type="checkbox" label="Vous même" />
          <Form.Check type="checkbox" label="un tier" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>-Quel est votre budget actuel accordé à la communication digitale de votre entreprise ?</Form.Label>
          <Form.Control type="textarea" placeholder="Budget" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Avez-vous un site Web ?</Form.Label>
          <Form.Check type="checkbox" label="oui" />
          <Form.Check type="checkbox" label="non" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Le contenu image/vidéo existe t'il ? </Form.Label>
          <Form.Check type="checkbox" label="oui" />
          <Form.Check type="checkbox" label="non" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Le contenu écris existe - il ? </Form.Label>
          <Form.Check type="checkbox" label="présentation de la marque" />
          <Form.Check type="checkbox" label="message d'acceuil" />
          <Form.Check type="checkbox" label="autre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Avez vous un logo ?</Form.Label>
          <Form.Check type="checkbox" label="oui" />
          <Form.Check type="checkbox" label="non" />
        </Form.Group>

        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Avez vous une palette de couleurs ?</Form.Label>
          <Form.Check type="checkbox" label="oui" />
          <Form.Check type="checkbox" label="non" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Y a t'il un besoin de spécifique à mettre en ligne? </Form.Label>
          <Form.Control type="textarea" placeholder="module de Reservation, Boutique en ligne, visuel 3d, frise chronologique,feedAstagram" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>-Commentaire pour rajouter les infos qu'il ne faut pas oublier ?</Form.Label>
          <Form.Control type="textarea" placeholder="" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control type="textarea" placeholder="Entrer le téléphone du client" />
        </Form.Group>
        
        <Button variant="primary" type="submit" disabled={disabled}>
          Submit
        </Button>
        </Stack>
      </Form>
    </Container>
    </div>
  );
};

export default App;

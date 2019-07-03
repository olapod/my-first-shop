import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleMap from "../GoogleMap"
import axios from 'axios';
import "./contactForm.scss"

export class ContactForm extends Component {

  constructor(props){
	  super(props);

	  this.state = {
		  name: '',
      phone: '',
      email: '',
		  message: '',
		  show: false,
		  validated: false,
    }

// sets the state of the component depending on the change of the input field
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

//change state everytime input is entered in the field
  handleChange = e => {
	 this.setState({ [e.target.name]: e.target.value })
 }

  handleSubmit(event) {
	  event.preventDefault();
    const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
	      this.getResponse();
   	    this.handleShow();
      }

	  this.setState({ validated: true })
    }

  handleClose() {
	  this.setState({
      show: false,
	    validated: false,
	    name: '',
		  email: '',
		  phone: '',
		  message: ''
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  getResponse() {
    const { name, phone, email, message } = this.state;
    axios.post("http://localhost:8080/api/form", {
      name,
      phone,
      email,
      message
    })
    .then (function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
	const { validated } = this.state;
    return (
		  <div className="container contact-container">
       <div className='message-form'>
		    <h3>W razie pytań skontaktuj się z nami</h3>
		    <Form
		      noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
		    >
		      <Form.Group controlId="formName">
            <Form.Label>Imię i nazwisko</Form.Label>
	          <Form.Control
	            required
	            type="text"
	            name="name"
	            placeholder="Imię i nazwisko"
	            onChange={ this.handleChange }
	            value={this.state.name}
	          />

          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Adres e-mail</Form.Label>
	          <Form.Control
	            required
	            type="email"
	            name="email"
	            placeholder="Podaj adres e-mail"
	            onChange={ this.handleChange}
	            value={this.state.email}/>
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Numer telefonu</Form.Label>
	          <Form.Control
	            type="phone"
	            name="phone"
	            placeholder="Nr telefonu"
	            onChange={ this.handleChange}
	            value={this.state.phone} />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Treść wiadomości</Form.Label>
	          <Form.Control as="textarea" rows="5"
	            required
	            placeholder="Wiadomość"
	            name='message'
	            onChange={ this.handleChange}
	            value={this.state.message} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Wyślij wiadomość
          </Button>
        </Form>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Wiadomość została wysłana</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Skontaktujemy się z Tobą w ciągu 24h.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Zamknij
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="contactData">
		    <h3>Tu nas znajdziesz</h3>
		    <div className="map-container">
		      <GoogleMap />
		    </div>
		    <h3>Adres:</h3>
		    <p>ul. Drukarzy 13</p>
		    <p>43-300 Bielsko-Biała</p>
		    <p>tel. 33-499 00 00</p>
		    <p>e-mail: sklep@ksiazki.pl</p>
		    <p>Pracujemy od pn. do pt. od 8:00 do 16:00</p>
      </div>
    </div>
    );
  }
}

import React, { Component } from "react";
import CreditCard from "./CreditCard";
import CardList from './CardList';
import "./CreditCardFormStyle.css";

class CreditCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: "",
      cardName: "",
      expiryMM: "",
      expiryYY: "",
      cvv: "",
      cardNumberError: "",
      cardNameError: "",
      cardExpiryError: "",
      cardCvvError: "",
      allCards: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //Error handling
  validate = () => {
    let cardNumberError = "";
    let cardNameError = "";
    let cardExpiryError = "";
    let cardCvvError = "";

    //Regex test for exactly 16 digits
    if (!/\d{16}/.test(this.state.cardNumber)) {
      cardNumberError = "Must be 16 digits";
    }
    //Regex test for capitalized first and last name, seperated by a space and minimum 3 letters each
    if (!/^([A-Z]{3,})\s([A-Z]{3,})$/.test(this.state.cardName)) {
      cardNameError =
        "First and Last name must be all capitals, divided by a space";
    }
    //Test for empty fields
    if (!this.state.expiryMM || !this.state.expiryYY) {
      cardExpiryError = "Must select a MM/YY";
    }
    //Regex test for exactly 3 digits
    if (!/\d{3}/.test(this.state.cvv)) {
      cardCvvError = "Must be 3 digits";
    }

    if (cardNumberError || cardNameError || cardExpiryError || cardCvvError) {
      this.setState({
        cardNumberError,
        cardNameError,
        cardExpiryError,
        cardCvvError,
      });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state); 
      this.setState({allCards: this.state})
      this.setState({
        cardNumber: "",
        cardName: "",
        expiryMM: "",
        expiryYY: "",
        cvv: "",
        cardNumberError: "",
        cardNameError: "",
        cardExpiryError: "",
        cardCvvError: "",
      });
    }
  };

  render() {
    return (
      <div>
        <CreditCard
          cardNumber={this.state.cardNumber}
          cardName={this.state.cardName}
          cardExpiry={`${this.state.expiryMM}/${this.state.expiryYY}`}
          cvv={this.state.cvv}
        />
        <div className="card-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-top">
              <label>Card Number</label>
              <div className="error-message">{this.state.cardNumberError}</div>
              <input
                className="card-input"
                name="cardNumber"
                type="text"
                value={this.state.cardNumber}
                onChange={this.handleChange}
                maxLength="16"
                placeholder="1234 1234 1234 1234"
              />
            </div>
            <div>
              <label>Card Holder</label>
              <div className="error-message">{this.state.cardNameError}</div>
              <input
                className="card-input"
                name="cardName"
                type="text"
                value={this.state.cardName}
                onChange={this.handleChange}
                placeholder="JOHN SMITH"
              />
            </div>
            <div>
              <label>Expiration Date</label>
              <div className="error-message">{this.state.cardExpiryError}</div>
              <div className="expiry-wrapper">
                <select
                  className="card-expiry"
                  name="expiryMM"
                  value={this.state.expiryMM}
                  onChange={this.handleChange}
                >
                  <option value="">Month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select
                  className="card-expiry"
                  name="expiryYY"
                  value={this.state.expiryYY}
                  onChange={this.handleChange}
                >
                  <option value="">Year</option>
                  <option value="21">2021</option>
                  <option value="22">2022</option>
                  <option value="23">2023</option>
                  <option value="24">2024</option>
                  <option value="25">2025</option>
                  <option value="26">2026</option>
                </select>
              </div>
              <div>
                <label>CVV</label>
                <div className="error-message">{this.state.cardCvvError}</div>
                <input
                  className="card-expiry"
                  name="cvv"
                  type="text"
                  value={this.state.cvv}
                  onChange={this.handleChange}
                  maxLength="3"
                  placeholder="789"
                />
              </div>
            </div>

            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
          <CardList allCards={this.state.allCards} />
        </div>
      </div>
    );
  }
}

export default CreditCardForm;

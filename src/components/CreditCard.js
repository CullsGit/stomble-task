import React, { Component } from "react";
import "./CreditCardStyle.css";

class CreditCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-front">
          <div className="logo">VISA</div>

          <div className="card-number">{this.props.cardNumber}</div>

          <div className="card-info">
            <div>
              <div className="card-info_label">Card Holder</div>
              <div>{this.props.cardName}</div>
            </div>

            <div>
              <div className="card-info_label">Expiry</div>
              <div>{this.props.cardExpiry}</div>
            </div>
          </div>
        </div>

        <div className="card-back">
          <div className="black-stripe"></div>
          <div>
            <div className="card-cvv">
              <div>CVV</div>
              <div>{this.props.cvv}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;

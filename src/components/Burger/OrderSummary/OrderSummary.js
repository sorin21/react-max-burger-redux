import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
  // Make an array from ingredients object
  const ingredientsSummary = Object.keys(props.ingredients)
    .map((ingKey) => {
      return(
        <li key={ingKey}>
          <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>
      );
    });
  return(
    <Aux>
      <h3>Your order</h3>
      <p>Adelicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishKey =
    'pk_test_51IJmEUD5QsQiJKBgfyondQWgVJYjB2kDCNIqKXyjFNb1So5jqeDBt3YYTm6ib7VpErt7kGYmnguMiiJh6rkCUuSA00QtH7Hb28';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Presto Clothing"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is: $${price}`}
      amount={stripePrice}
      paneLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeButton;

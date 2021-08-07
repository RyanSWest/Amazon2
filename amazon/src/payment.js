import React , {useState, useEffect}from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';
function Payment({ user, cartItems, getTotalPrice}) {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [error, setError]= useState(null);
  const [disabled, setDisabled]= useState(true);
  const [processing, setProcessing]=useState("")
  const [succeeded, setSucceeded] = useState(true);
  const [ clientSecret, setClientSecret]= useState(true);

  useEffect (()=> {
      // generate the special stripe secret which allos us to charge a customer
         const getClientSecret = async ()=> {
             const response = await axios({
                 method: 'post',
                 //Stripe expects the total in cents
                 url: `/payments/create?total=${getTotalPrice() * 100}`
             });
             console.log("RES ===>", response)
             setClientSecret(response.data.clientSecret)
         }
         getClientSecret();
          
  }, [cartItems]) 

  console.log("THE SECRET IS >>>", clientSecret)

  const handleSubmit = async (e)=> {
      e.preventDefault();
      setProcessing(true);
      const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardElement)
          }

      }).then(({paymentIntent}) => {
        setSucceeded(true);
                  setError(null)
                  setProcessing(false)
        
                  history.replaceState('/orders')

      })
  }

 
  const handleChange = (e) => {
      e.preventDefault();
      setDisabled(e.empty);
      setError(e.error ? e.error.message: "")
  }

  return (
    <div>
      
      <Container>
        <h1>
          Checkout (<Link to="/checkout">{cartItems?.length}items</Link>)
        </h1>

        <PaymentSection>
          <PaymentTitle>
            <h3>Delivery Address</h3>

             
          </PaymentTitle>
          <PaymentAddress>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </PaymentAddress>
        </PaymentSection>

        <PaymentSection>
          <PaymentTitle>
            <h3>Review items and delivery</h3>
          </PaymentTitle>
          <PaymentItems>
            {cartItems?.map((i) => {
              return (
               
                <CartItem
                  name={i.product.name}
                  image={i.product.image}
                  id={i.id}
                  item={i.product}
                  rating={i.product.rating}
                  price={i.product.price}
                />
              );
            })}
          </PaymentItems>
        </PaymentSection>

           <PaymentSection> 
         
            <PaymentTitle>
                <h3>Payment Method</h3>
            </PaymentTitle>
            <PaymentDetails> 

        <form onSubmit ={handleSubmit}>
              <CardElement onChange = {handleChange}/>
              <PaymentPriceContainer>
                  <h3>Order Total: {getTotalPrice()}</h3>

                  <button disabled = {processing || disabled || succeeded}>

                      <span>{processing ? <p>Processing</p>:
                       "Buy Now"}</span>
                  </button>

              </PaymentPriceContainer>

            </form>
            </PaymentDetails>
            </PaymentSection>
            
      </Container>
    </div>
  );
}

export default Payment;

const Container = styled.div`
background-color: white;
h1{
    text-align: center;
    padding: 10px;
    font-weight:400;
    background-color: rgb(234,237,237)
    border-bottom: 1px solid lightgray;
    a{
        text-decoration:none;
    }

}

`
const PaymentItems = styled.div`
flex: 0.8%`;

const PaymentDetails = styled.div `
flex: 0.8%;

`;
const PaymentPriceContainer = styled.div ` 


`

const PaymentSection = styled.div`
display: flex;
padding: 20px;
margin 0 20px;
border-bottom: 1px solid ligthgray;

`;

const PaymentTitle = styled.div`
  flex: 0.2;
`;

const PaymentAddress = styled.div`
flex:0.8%;

`;

import React, { useContext } from 'react'
import './PlaceOrder.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { StoreContext } from '../../context/StoreContext';
const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    // <div className='place-Order'>
    //   <Container className='place-Order-left'>
    //     <h4 className="my-4">Delivery Information</h4>
    //     <Form>
    //       <Row>
    //         <Col md={4}>
    //           <Form.Control type="text" placeholder="First name" />
    //         </Col>
    //         <Col md={4}>
    //           <Form.Control type="text" placeholder="Last name" />
    //         </Col>
    //       </Row>

    //       <Row>
    //         <Col md={4}>
    //           <Form.Control type="email" placeholder="Email address" />
    //         </Col>
    //         <Col md={4}>
    //           <Form.Control type="text" placeholder="Street" />
    //         </Col>
    //       </Row>

    //       <Row>
    //         <Col md={4}>
    //           <Form.Control type="text" placeholder="City" />
    //         </Col>
    //         <Col md={4}>
    //           <Form.Control type="text" placeholder="State" />
    //         </Col>
    //       </Row>

    //       <Row>
    //         <Col md={4}>
    //           <Form.Control type="number" placeholder="zip code" />
    //         </Col>
    //         <Col md={4}>
    //           <Form.Control type="text" placeholder="Country" />
    //         </Col>
    //       </Row>

    //       <Row>
    //         <Col md={4}>
    //           <Form.Control type="number" placeholder="Phone number" />
    //         </Col>
    //       </Row>

    //       <Button variant="primary" type="submit">
    //         Submit
    //       </Button>
    //     </Form>
    //   </Container>

    //   <div className='place-Order-right'>
    //   <div className='cart-total'>
    //       <h2>Cart Totals</h2>
    //       <div>
    //         <div className='cart-total-details'>
    //           <p>Subtotal</p>
    //           <p>Rs. {getTotalCartAmount()}</p>
    //         </div>
    //         <hr />
    //         <div className='cart-total-details'>
    //           <p>Delivery Fee</p>
    //           <p>Rs. {30}</p>
    //         </div>
    //         <hr />
    //         <div className='cart-total-details'>
    //           <b>Total</b>
    //           <b>Rs. {getTotalCartAmount()+30}</b>
    //         </div>
    //         <Button variant='success' className='rounded-0 mt-3 py-2 px-3'
    //         >
    //           Proceed To Payment</Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='place-order'>
      <Row className='gx-5'>
        <Col md={8} >
          <Container>
            <Row>
              <Container className="place-Order-left">
                <h4 className="my-4">Delivery Information</h4>
                <Form>
                  <Row className=" mb-3">
                    <Col md={5} className="mb-3 mb-md-0">
                      <Form.Control type="text" placeholder="First name" />
                    </Col>
                    <Col md={5}>
                      <Form.Control type="text" placeholder="Last name" />
                    </Col>
                  </Row>

                  <Row className=" mb-3">
                    <Col md={5} className="mb-3 mb-md-0">
                      <Form.Control type="email" placeholder="Email address" />
                    </Col>
                    <Col md={5}>
                      <Form.Control type="text" placeholder="Street" />
                    </Col>
                  </Row>

                  <Row className=" mb-3">
                    <Col md={5} className="mb-3 mb-md-0">
                      <Form.Control type="text" placeholder="City" />
                    </Col>
                    <Col md={5}>
                      <Form.Control type="text" placeholder="State" />
                    </Col>
                  </Row>

                  <Row className=" mb-3">
                    <Col md={5} className="mb-3 mb-md-0">
                      <Form.Control type="number" placeholder="Zip code" />
                    </Col>
                    <Col md={5}>
                      <Form.Control type="text" placeholder="Country" />
                    </Col>
                  </Row>

                  <Row className=" mb-3">
                    <Col md={5}>
                      <Form.Control type="number" placeholder="Phone number" />
                    </Col>
                  </Row>

                  <Button variant='success' className='rounded-0 mt-3 py-2 px-3' type="submit">
                    Submit
                  </Button>
                </Form>
              </Container>
            </Row>
          </Container>

        </Col>

        <Col md={4}>
          <div className='place-Order-right'>
            <div className='cart-total mt-4'>
              <h4>Cart Totals</h4>
              <div>
                <div className='cart-total-details mt-2'>
                  <p>Subtotal</p>
                  <p>Rs. {getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                  <p>Delivery Fee</p>
                  <p>Rs. {30}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                  <b>Total</b>
                  <b>Rs. {getTotalCartAmount() + 30}</b>
                </div>
                <Button variant='success' className='rounded-0 mt-4 py-2 px-3'
                >
                  Proceed To Payment</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PlaceOrder
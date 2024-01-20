import React from 'react';
import { Container } from "react-bootstrap";
import NavigationBar from '../components/NavigationBar';
import Footer from "../components/Footer";
import LoginComponent from '../components/LoginComponent';

const LoginPage = () => (

    <Container fluid>
      <NavigationBar />
      <LoginComponent />
      <p>Si no tienes cuenta, <a href='/registro'>create una</a></p>
      <Footer />
    </Container>
)

export default LoginPage
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>Main Content</Container>
      </main>
      <Footer />
    </Fragment>
  );
}

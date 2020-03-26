// react
import React, { useState, useEffect } from 'react';
// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
// other libs/imports
import { connect } from 'react-redux';
// images
// components
// action creators

const ComponentName = () => {

  const renderHeading = () => {
    return <h2 className="mt-3">Hello World</h2>;
  };

  const renderBlurb = () => {
    return (
      <p>
        helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld helloWorld
      </p>
    );
  };

  const renderMain = () => {
    return (
      'helloWorld'
    )
  }

  return (
    <Container>
      {renderHeading()}
      {renderBlurb()}
      {renderMain()}
    </Container>
  )
}

export default connect(null, {  })(ComponentName);

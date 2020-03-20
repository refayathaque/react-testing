// react
import React, { useState, useEffect } from 'react';
// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
// other libs/imports
// images
// components
// action reducers

const ComponentName = () => {

  const renderBody = () => {
    return (
      'helloWorld'
    )
  }

  return (
    <Container>
      {renderBody()}
    </Container>
  )
}

export default ComponentName;

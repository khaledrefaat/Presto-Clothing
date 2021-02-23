import React from 'react';
import { Card } from 'react-bootstrap';

function MenuItem({ title, imgSrc }) {
  return (
    <>
      <Card className="menu-item">
        <Card.Img variant="top" src={imgSrc} />
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">shop now</span>
        </div>
      </Card>
    </>
  );
}

export default MenuItem;

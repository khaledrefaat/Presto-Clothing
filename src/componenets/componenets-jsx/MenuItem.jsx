import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MenuItem.scss';

function MenuItem({ title, imgSrc, linkPath }) {
  return (
    <Link to={linkPath}>
      <Card className="menu-item">
        <Card.Img variant="top" src={imgSrc} />
        <div className="menu-item__content">
          <h1 className="menu-item__title">{title}</h1>
          <span className="menu-item__subtitle">shop now</span>
        </div>
      </Card>
    </Link>
  );
}

export default MenuItem;

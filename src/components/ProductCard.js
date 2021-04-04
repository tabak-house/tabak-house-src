import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';

const ProductCard = (props) => {
  return (
    <Card data-cms-id={props.contentfulId}>
      <Card.Link href={props.url}>
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className={'text-right p-2 m-2'}>
            {props.price}₽
          </Card.Subtitle>
        </Card.Body>
      </Card.Link>
    </Card>
  );
};

ProductCard.propTypes = {
  contentfulId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProductCard;

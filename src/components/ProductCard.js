import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';

/**
 * Product Card component.
 */
export default class ProductCard extends React.Component {
  /**
   * @inheritDoc
   * @return {JSX.Element}
   */
  render() {
    const {
      contentfulId,
      imageUrl,
      price,
      title,
      url,
    } = this.props;

    return (
      <Card data-cms-id={contentfulId}>
        <Card.Link href={url}>
          <Card.Img variant="top" src={imageUrl}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className={'text-right p-2 m-2'}>
              {price}₽
            </Card.Subtitle>
          </Card.Body>
        </Card.Link>
      </Card>
    );
  };
}

ProductCard.propTypes = {
  contentfulId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

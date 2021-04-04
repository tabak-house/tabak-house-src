import React from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"

export default class ProductCard extends React.Component {
  render() {
    return (
      <Card data-cms-id={this.props.contentfulId}>
        <Card.Link href={this.props.url}>
          <Card.Img variant="top" src={this.props.imageUrl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Subtitle className={"text-right p-2 m-2"}>
              {this.props.price}₽
            </Card.Subtitle>
          </Card.Body>
        </Card.Link>
      </Card>
    )
  }
}

ProductCard.propTypes = {
  contentfulId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

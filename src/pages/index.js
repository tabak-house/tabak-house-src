import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Tabak House: Магазин табаков и кальянов в ДНР" keywords={[`tabak`, `табак`, `bootstrap`]} />
    <Container id={"homepage-container"}>
      <Row>
        <Col>
          <p className={"text-center"}>Не тряси зеленую яблоню – когда яблоко созреет, оно упадет само.</p>
          <div className="image text-center">
            <img src="https://bukvaeshka.by/upload/iblock/a37/f8ace107296ec06ccc2129d6acc3c791[1].png" alt="Кряк" draggable="false" />
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

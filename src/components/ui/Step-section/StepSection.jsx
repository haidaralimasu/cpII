import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Setup your metamask wallet download extension and load it with matic.",
    icon: "ri-wallet-line",
  },

  {
    title: "Create your post",
    desc: "Go to create page and write whatever you want to write on blockchain.",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your Images",
    desc: "Add your images as well on your post stored on decentralized storage.",
    icon: "ri-image-line",
  },

  {
    title: "Find other users in app",
    desc: "You can find your friends on Tree and can grow your network on tree.",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Learn more...</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;

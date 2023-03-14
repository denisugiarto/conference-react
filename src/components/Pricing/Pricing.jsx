import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Section from "../UI/Section";
import CardPrice from "./CardPrice";
import "./Pricing.scss";

const Pricing = () => {
  const [pricingList, setPricingList] = useState([]);
  const [listDetails, setListDetails] = useState([]);
  useEffect(() => {
    axios.get("/data/prices.json").then((res) => {
      setPricingList(res.data.prices);
      setListDetails(res.data.listItem);
    });
  }, []);
  return (
    <Section title="Плата" sectionClassName="pricingBg" titleClassName="text-white">
      <div className="mt-3 mt-lg-6">
        <Row className="row-cols-1 row-md-cols-2 row-cols-lg-4 g-5">
          {!pricingList && <p>Loading ...</p>}
          {pricingList.length > 1 &&
            pricingList.map((priceItem, index) => (
              <Col key={`prices${index}`}>
                <CardPrice content={priceItem} />
              </Col>
            ))}
        </Row>
        <Card className="mt-4 ">
          <Card.Body className="p-4 fw-bold text-success">
            <p>
              Плата за участие в конференции (для одного человека) включает:
            </p>
            <ul className="ps-3">
              {listDetails.map((list, index) => (
                <li key={index}>
                  <p>{list.content}</p>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </div>
    </Section>
  );
};

export default Pricing;

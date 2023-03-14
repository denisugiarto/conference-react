import axios from "axios";
import React, { useEffect, useState } from "react";

import { Card, Carousel, Col, Row } from "react-bootstrap";
import { sliceIntoChunks } from "../utils/SliceIntoChunks";
import Section from "./UI/Section";

const UserReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const listReviews = "/data/UserReview.json";
        const response = await axios.get(listReviews);
        const jsonData = response.data.data;
        const dataReviews = sliceIntoChunks(jsonData, 6);
        setReviews(dataReviews);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();
  }, []);

  return (
    <Section title="Докладчики">
      <Carousel variant="dark">
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <div className="px-5 py-3 mb-5">
              <Row sm={1} md={2} lg={3} className="g-3">
                {review.map((item, index) => (
                  <Col key={`r${index}`}>
                    <Card className="shadow">
                      <Card.Body>
                        <Row className="g-3">
                          <Col md={4}>
                            <Card.Img
                              className="rounded-circle"
                              src={item.image}
                              width="100"
                              height="100"
                            />
                          </Col>
                          <Col md={8}>
                            <Card.Title className="font--heading fs-4 fw-bold">
                              {item.first_name}&nbsp;{item.last_name}
                            </Card.Title>
                            <Card.Text className="fs-7 text-truncate">
                              {item.desc}
                            </Card.Text>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Section>
  );
};

export default UserReview;

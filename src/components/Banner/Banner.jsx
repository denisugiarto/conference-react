import React from "react";
import { Container } from "react-bootstrap";
import ImgBanner from "/Img Placeholder.svg";

const Banner = () => {
  return (
    <Container fluid className="p-0 position-relative">
      <img src={ImgBanner} alt=" " className="img-fluid" />
      <h2 className="position-absolute top-50 start-50 fs-8 fs-md-4 fs-lg-2 text-white translate-middle text-center fw-bold font--heading lh-base">
        Первый Международный Симпозиум «ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ В ПРОИЗВОДСТВЕ
        СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ И КОНСТРУКЦИЙ» 27-28 ноября 2020 в г. Ташкенте
      </h2>
    </Container>
  );
};

export default Banner;

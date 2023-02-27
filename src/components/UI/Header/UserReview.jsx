import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./UserReview.css";
import { Card, Carousel, Col, Row } from "react-bootstrap";

const UserReview = () => {
	const [user, setUser] = useState([]);

	useEffect(() => {
		const getuser = async () => {
			try {
				// const file = "../../../../public/data/UserReview.json";
				const file = "/data/UserReview.json";
				const response = await axios.get(file);
				const jsonData = response.data.data;
				console.log(jsonData);
				setUser(jsonData);
			} catch (error) {
				console.log(error);
			}
		};

		getuser();
	}, []);

	// const settings = {
	// 	dots: true,
	// 	dotsClass: "slick-dots",
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3,
	// 	initialSlide: 0,
	// 	appendDots: (dots) => (
	// 		<div
	// 			style={{
	// 				padding: "1px",
	// 				height: "15px",
	// 			}}
	// 			className='row'
	// 		>
	// 			<div className='col-12'>
	// 				<ul style={{ margin: "0px" }}> {dots} </ul>
	// 			</div>
	// 		</div>
	// 	),
	// 	rows: 2,

	// 	responsive: [
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2,
	// 				infinite: true,
	// 				dots: true,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				infinite: true,
	// 				dots: true,
	// 			},
	// 		},
	// 	],
	// };

	return (
		<>
			<div className='review'>
				<div className='container text-center justify-content-center'>
					<div className='row justify-content-center p-5 d-flex g-3'>
						<h2
							style={{
								width: "310px",
								marginTop: "5px",
								fontFamily: "Alegreya",
								fontWeight: "700",
								fontSize: "48px",
								lineHeight: "65.33px",
								textAlign: "center",
								marginBottom: "25px",
							}}
						>
							Докладчики
						</h2>
						<br />
						<Row
							xs={1}
							md={12}
							className='g-4'
						>
							<Swiper
								slidesPerView={6}
								grid={{
									rows: 2,
								}}
								spaceBetween={180}
								pagination={{
									clickable: true,
								}}
								modules={[Grid, Pagination]}
								className='mySwiper'
								style={{ height: "435px", width: "1200px" }}
							>
								{user.map((item) => (
									<Col key={item.id}>
										<SwiperSlide key={item.id}>
											<Card
												className='d-flex text-start'
												style={{
													width: "370px",
													height: "170px",
													boxShadow: "3px 2px 1px grey",
												}}
											>
												<Card.Body className='d-flex text-start justify-content-evenly'>
													<Card.Img
														src={item.image}
														className='mt-4'
														alt=' '
														style={{ width: "100px", height: "100px" }}
													/>
													<div className='d-inline py-4 m-2'>
														<Card.Title
															style={{
																fontFamily: "Alegreya",
																fontWeight: "700",
																fontSize: "24px",
																lineHeight: "32.66px",
															}}
														>
															{item.first_name}&nbsp;{item.last_name}
														</Card.Title>
														<Card.Text
															style={{
																fontFamily: "Lato",
																fontWeight: "400",
																fontSize: "18px",
																lineHeight: "21.6px",
															}}
														>
															{item.desc}
														</Card.Text>
													</div>
												</Card.Body>
											</Card>
										</SwiperSlide>
									</Col>
								))}
							</Swiper>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserReview;

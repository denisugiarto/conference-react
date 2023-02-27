import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import "./UserReview.css";
import { Card, Col, Row } from "react-bootstrap";

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
								slidesPerView={3}
								centeredSlides={false}
								grid={{
									rows: 2,
								}}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								spaceBetween={7}
								pagination={{
									clickable: true,
								}}
								breakpoints={{
									352: {
										slidesPerView: 1,
										spaceBetween: 15,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 15,
									},
									1320: {
										slidesPerView: 3,
									},
								}}
								modules={[Autoplay, Grid, Pagination]}
								className='mySwiper swipe-responsive'
								style={{ height: "435px", width: "1480px" }}
							>
								{user.map((item) => (
									<Col key={item.id}>
										<SwiperSlide
											key={item.id}
											style={{
												height: "calc((100% - 100px) / 2)",
											}}
										>
											<Card className='d-flex shadow cardfirst justify-content-start'>
												<Card.Body className='d-flex text-start'>
													<div>
														<Card.Img
															src={item.image}
															className='images'
															alt=' '
														/>
													</div>
													<div className='d-inline-block'>
														<Card.Title
															style={{
																fontFamily: "Alegreya",
																fontWeight: "700",
																fontSize: "24px",
																lineHeight: "32.66px",
																marginLeft: "15px",
															}}
														>
															{item.first_name}&nbsp;{item.last_name}
														</Card.Title>
														<Card.Text
															className='title'
															style={{
																fontFamily: "Lato",
																fontWeight: "400",
																fontSize: "18px",
																lineHeight: "21.6px",
																marginLeft: "15px",
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

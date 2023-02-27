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
								spaceBetween={20}
								pagination={{
									clickable: true,
								}}
								modules={[Autoplay, Grid, Pagination]}
								className='mySwiper'
								style={{ height: "435px", width: "1200px" }}
							>
								{user.map((item) => (
									<Col key={item.id}>
										<SwiperSlide
											key={item.id}
											style={{ height: "calc((100% - 30px) / 2)" }}
										>
											<Card
												className='d-flex text-start shadow'
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

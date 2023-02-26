import axios from "axios";
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const UserReview = () => {
	const [user, setUser] = useState([]);

	useEffect(() => {
		const getuser = async () => {
			try {
				const file = "../../../../public/data/UserReview.json";
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

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		appendDots: (dots) => (
			<div
				style={{
					padding: "3px",
					height: "15px",
				}}
			>
				<ul style={{ margin: "0px" }}> {dots} </ul>
			</div>
		),
		rows: 2,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<>
			<div className='container text-center justify-content-center'>
				<div className='row justify-content-center p-5'>
					<h2
						style={{
							width: "310px",
							marginTop: "5px",
							fontFamily: "Alegreya",
							fontWeight: "700",
							fontSize: "48px",
							lineHeight: "65.33px",
							textAlign: "center",
						}}
					>
						Докладчики
					</h2>
					<br />
					<Slider {...settings}>
						{user.map((item) => (
							<div
								className='card p-1 mb-3'
								key={item.id}
							>
								<div className='row'>
									<div className='col mb-3'>
										<img
											src={item.image}
											className=' mt-4'
											alt=' '
										/>
									</div>
									<div className='col-md-8'>
										<div className='card-body'>
											<h5 className='card-title text-start'>
												{item.first_name}&nbsp;{item.last_name}
											</h5>
											<p className='card-text  text-start'>{item.desc}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</>
	);
};

export default UserReview;

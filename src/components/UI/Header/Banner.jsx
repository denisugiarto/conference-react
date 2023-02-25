import React from "react";
import banner from "../../../assets/Img Placeholder.svg";
import "./Banner.css";

const Banner = () => {
	return (
		<>
			<div className='container'>
				<img
					src={banner}
					alt=' '
					className='banner'
				/>
			</div>
		</>
	);
};

export default Banner;

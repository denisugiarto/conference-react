import React from "react";
import banner from "../../../../public/bannertwo.svg";

const Time = () => {
	return (
		<>
			<div
				className='container-fluid'
				style={{
					backgroundImage: `url(${banner})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					minHeight: "405px",
				}}
			></div>
		</>
	);
};

export default Time;

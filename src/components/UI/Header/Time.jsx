import React from "react";
import banner from "../../../../public/bannertwo.svg";

const Time = () => {
	return (
		<>
			<div
				className='container-fluid py-2'
				style={{
					backgroundImage: `url(${banner})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					minHeight: "405px",
				}}
			></div>
		</>
	);
};

export default Time;

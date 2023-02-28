import React from "react";
import banner from "../../../../public/bannertwo.svg";
import bannerr from "../../../../public/bannerthree.svg";

import "./Time.scss";

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
					textAlign: "center",
				}}
			>
				<div style={{ paddingTop: "70px" }}>
					<span className='title font--heading'>
						Симпозиум будет начата через
					</span>
					<div className='d-flex justify-content-center position-relative'>
						<img
							className='img-fluid m-5 m-lg-2 position-absolute pt-5'
							alt=' '
							src={bannerr}
						/>
						<span className='position-absolute  mt-1 pt-6 mt-lg-4 text-white fw-bold timer'>
							59 : 11 : 58 : 59
						</span>
						<span className='row g-lg-7 gap-lg-5 position-absolute subtimer d-flex'>
							<p className='col'>Дней</p>
							<p className='col'>&nbsp;Часов</p>
							<p className='col'>Минут</p>
							<p className='col'>Секунд</p>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Time;

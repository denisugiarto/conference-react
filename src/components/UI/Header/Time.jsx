import React from "react";
import banner from "../../../../public/bannertwo.svg";
import bannerr from "../../../../public/bannerthree.svg";

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
					<span
						style={{
							fontFamily: "Alegreya",
							fontWeight: "700",
							fontSize: "48px",
							lineHeight: "65.33px",
							textAlign: "center",
							color: "#ffffff",
							letterSpacing: "10px",
							top: "70px",
						}}
					>
						Симпозиум будет начата через
					</span>
					<div className='d-flex justify-content-center position-relative'>
						<img
							alt=' '
							src={bannerr}
							style={{ paddingTop: "30px", position: "absolute" }}
						/>
						<span
							className='position-absolute'
							style={{
								top: "60px",
								left: "50%",
								transform: "translateX(-50%)",
								zIndex: "2",
								fontFamily: "Lato",
								fontWeight: "400",
								fontSize: "64px",
								lineHeight: "76.8px",
								color: "#ffffff",
								letterSpacing: "20px",
								width: "1037px",
							}}
						>
							59 : 11 : 58 : 59
						</span>
						<span
							className='position-absolute'
							style={{
								transform: "translateX(-50%)",
								zIndex: "2",
								top: "140px",
								left: "29%",
								fontfamily: "Lato",
								fontWeight: "400",
								fontSize: "24px",
								lineHeight: "28.8px",
								color: "#FFFFFF",
							}}
						>
							Дней
						</span>
						<span
							className='position-absolute'
							style={{
								transform: "translateX(-50%)",
								zIndex: "2",
								top: "140px",
								left: "42.5%",
								fontfamily: "Lato",
								fontWeight: "400",
								fontSize: "24px",
								lineHeight: "28.8px",
								color: "#FFFFFF",
							}}
						>
							Часов
						</span>
						<span
							className='position-absolute'
							style={{
								transform: "translateX(-50%)",
								zIndex: "2",
								top: "140px",
								left: "56.5%",
								fontfamily: "Lato",
								fontWeight: "400",
								fontSize: "24px",
								lineHeight: "28.8px",
								color: "#FFFFFF",
							}}
						>
							Минут
						</span>
						<span
							className='position-absolute'
							style={{
								transform: "translateX(-50%)",
								zIndex: "2",
								top: "140px",
								left: "70%",
								fontfamily: "Lato",
								fontWeight: "400",
								fontSize: "24px",
								lineHeight: "28.8px",
								color: "#FFFFFF",
							}}
						>
							Секунд
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Time;

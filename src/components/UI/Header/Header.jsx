import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Banner from "./Banner";
import About from "./About";
import UserReview from "./UserReview";
import Time from "./Time";
import "./Header.css";

const Header = () => {
	const [onClick, setOnClick] = useState(true);

	const handleClick = () => {
		setOnClick(!onClick);
	};

	return (
		<>
			<div className='pageone'>
				<nav className='navbar navbar-expand-lg bg-body-tertiary'>
					<div className='container'>
						<a
							className='navbar-brand'
							href='#'
							style={{
								width: "84px",
								height: "54px",
								marginBottom: "15px",
								marginLeft: "125px",
								fontFamily: "Alegreya",
								fontWeight: "700",
								fontSize: "40px",
								color: "#1C3C2A",
							}}
						>
							Лого
						</a>
						<button
							onClick={handleClick}
							className='navbar-toggler bg-body'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'
							style={{ border: "none", fontSize: "24px" }}
						>
							<span>{onClick ? <RxHamburgerMenu /> : <GrClose />}</span>
						</button>
						<div
							className='collapse navbar-collapse justify-content-center'
							id='navbarNav'
						>
							<ul className='navbar-nav'>
								<li className='nav-item'>
									<a
										className='nav-link active'
										aria-current='page'
										href='#'
										style={{
											fontFamily: "Alegreya",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "24.5px",
											alignItems: "center",
										}}
									>
										Главная
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link active'
										aria-current='page'
										href='#'
										style={{
											fontFamily: "Alegreya",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "24.5px",
											alignItems: "center",
										}}
									>
										О Симпозиуме
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link active'
										aria-current='page'
										href='#'
										style={{
											fontFamily: "Alegreya",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "24.5px",
											alignItems: "center",
										}}
									>
										Докладчики
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link active'
										aria-current='page'
										href='#'
										style={{
											fontFamily: "Alegreya",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "24.5px",
											alignItems: "center",
										}}
									>
										Программа мероприятий
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link active'
										aria-current='page'
										href='#'
										style={{
											fontFamily: "Alegreya",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "24.5px",
											alignItems: "center",
										}}
									>
										Плата
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link active'
										aria-current='page'
										href='#'
										style={{
											fontFamily: "Alegreya",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "24.5px",
											alignItems: "center",
										}}
									>
										Контакты
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link active'
										aria-current='page'
										href='#'
										style={{
											fontFamily: "Alegreya",
											fontWeight: "700",
											fontSize: "18px",
											lineHeight: "24.5px",
											alignItems: "center",
										}}
									>
										Статьи
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<Banner />
				<About />
				<UserReview />
				<Time />
			</div>
		</>
	);
};

export default Header;

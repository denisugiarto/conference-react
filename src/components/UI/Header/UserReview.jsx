import React from "react";
import userone from "../../../assets/userone.svg";

const UserReview = () => {
	return (
		<>
			<div className='container text-center'>
				<h2
					style={{
						width: "310px",
						marginLeft: "470px",
						marginTop: "50px",
						fontFamily: "Alegreya",
					}}
				>
					О Симпозиуме
				</h2>
				<div className='row justify-content-center'>
					<div className='col-4 just'>
						<div
							className='card mb-3 shadow-lg text-end justify-content-center'
							style={{ width: "370px", height: "170px" }}
						>
							<div className='row g-0'>
								<div className='col-md-4'>
									<img
										src={userone}
										className=' mt-4'
										alt=' '
									/>
								</div>
								<div className='col-md-8'>
									<div className='card-body'>
										<h5 className='card-title text-start'>Cody Black</h5>
										<p className='card-text  text-start'>
											Aute ex laboris culpa dolor proident laborum exercitation
											consequat culpa.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-4'>
						<span>USER</span>
					</div>
					<div className='col-4'>
						<span>USER</span>
					</div>
					<div className='col-4'>
						<span>USER</span>
					</div>
					<div className='col-4'>
						<span>USER</span>
					</div>
					<div className='col-4'>
						<span>USER</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserReview;

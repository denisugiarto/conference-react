import React from "react";
import pict from "../../../assets/pict.svg";

const About = () => {
	return (
		<div className='container justify-content-center text-center mb-3'>
			<div className='row justify-content-center'>
				<h2
					style={{
						width: "310px",
						marginTop: "50px",
						fontFamily: "Alegreya",
					}}
				>
					О Симпозиуме
				</h2>
			</div>

			<div className='row row-cols-1 row-cols-lg-2 g-3'>
				<div className='col'>
					<p className='mt-lg-5  text-end'>
						Уважаемые коллеги! Ташкентский архитектурно-строительный институт,
						АССОЦИАЦИЯ «УЗПРОМСТРОЙМАТЕРИАЛЫ», ИП ООО КНАУФ Бухара Гипс,
						Казанскии Государственный архитектурно-строительный университ
						(Россия), Потсдамский специализированный институт (Германия), Южно
						Казахстанский Государственный университет им. М. Ауэзова (Казахстан)
						проводят первый Международный Симпозиум «ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ В
						ПРОИЗВОДСТВЕ СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ И КОНСТРУКЦИЙ», посвященный
						85-летнему юбилею известного ученого в области строительного
						материаловедения проф. КАСИМОВА ИРКИНА УМАРАЛИЕВИЧА, который
						состоится 27-28 ноября 2020 в г. Ташкенте
					</p>
				</div>
				<div className='col text-start'>
					<img
						className='img-fluid'
						alt=' '
						src={pict}
					/>
				</div>
			</div>

			<div className='col-4'>
				<button
					type='button'
					className='btn btn-success'
					style={{
						width: "108px",
						height: "22px",
						fontFamily: "Lato",
						fontWeight: "700",
						marginLeft: "50px",
						paddingBottom: "29px",
					}}
				>
					Подробно
				</button>
				<br />
				<br />
			</div>
		</div>
	);
};

export default About;

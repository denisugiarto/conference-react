import React from "react";
import pict from "../../../assets/pict.svg";

const About = () => {
	return (
		<div className='container text-center mb-3'>
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

			<div className='row align-items-start d-inline-flex'>
				<div className='col'>
					<p
						style={{
							width: "570px",
							height: "365px",
							marginTop: "34px",
							textAlign: "end",
							marginLeft: "70px",
						}}
					>
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
				<div className='col'>
					<img
						alt=' '
						src={pict}
						style={{
							width: "570px",
							height: "365px",
							marginTop: "34px",
							marginRight: "60px",
						}}
					/>
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
				</div>
			</div>
		</div>
	);
};

export default About;

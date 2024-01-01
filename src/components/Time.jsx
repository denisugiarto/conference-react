import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useCountdown } from '../hooks/useCountDown';
import './Time.scss';
import Section from './UI/Section';
import dayjs from 'dayjs';

const Time = () => {
  const [days, hours, minutes, seconds] = useCountdown(dayjs().add(10, 'day').add(6, 'hour').format('MM/DD/YYYY'));

	return (
		<Section title="Симпозиум будет начата через" sectionClassName="timeBg" titleClassName="text-white">
			<div className="p-3 py-md-5 px-md-7" style={{ backgroundColor: 'rgba(196,196,196, 0.3)' }}>
				<Row className="text-white text-center gx-0 gx-md-4" >
					<Col>
						<p className="fs-5 fs-md-2 fs-lg-1">{days}</p>
						<p className="fs-7 fs-md-4">Дней</p>
						{/* hari */}
					</Col>
					<Col>
						<p className="fs-5 fs-md-2 fs-lg-1">:</p>
					</Col>
					<Col>
						<p className="fs-5 fs-md-2 fs-lg-1">{hours}</p>
						<p className="fs-7 fs-md-4">Часов</p>
						{/* jam */}
					</Col>
					<Col>
						<p className="fs-5 fs-md-2 fs-lg-1">:</p>
					</Col>
					<Col>
						<p className="fs-5 fs-md-2 fs-lg-1">{minutes}</p>
						<p className="fs-7 fs-md-4">Минут</p>
						{/* menit */}
					</Col>
					<Col>
						<p className="fs-5 fs-md-2 fs-lg-1">:</p>
					</Col>
					<Col>
						<p className="fs-5 fs-md-2 fs-lg-1">{seconds}</p>
						<p className="fs-7 fs-md-4">Секунд</p>
						{/* second */}
					</Col>
				</Row>
			</div>
		</Section>
	);
};

export default Time;

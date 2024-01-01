import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
	const countDownInSeconds = dayjs(targetDate).diff(dayjs(), 'second');
	const [countDown, setCountDown] = useState(countDownInSeconds);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(prev => countDown - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [countDown]);

	return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
	const days = Math.floor(countDown / (60 * 60 * 24));
	const hours = Math.floor((countDown / (60 * 60)) % 24);
	const minutes = Math.floor((countDown / 60) % 60);
	const seconds = Math.floor(countDown % 60);
	return [days, hours, minutes, seconds];
};

export { useCountdown };

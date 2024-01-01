import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
	const countDownInSeconds = dayjs(targetDate).diff(dayjs(), 'second');
	console.log("🚀 ~ file: useCountDown.js:6 ~ useCountdown ~ countDownInSeconds:", countDownInSeconds)
	const [countDown, setCountDown] = useState(countDownInSeconds);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownInSeconds);
		}, 1000);

		return () => clearInterval(interval);
	}, [countDown]);

	return getReturnValues(targetDate);
};

const getReturnValues = (targetDate) => {
	const sec = dayjs(targetDate).diff(dayjs(), 'second');
	const days = Math.floor(sec / 24 / 60 / 60 );
	const hours = Math.floor((sec - days * 24 * 60 * 60 ) / 60 / 60);
	const minutes = Math.floor((sec - days * 24 * 60 * 60 - hours * 60 * 60 ) / 60);
	const seconds = dayjs(targetDate).diff(dayjs().add(days, 'day').add(hours, 'hours').add(minutes, 'minute'), 'second');
	return [days, hours, minutes, seconds];
};

export { useCountdown };

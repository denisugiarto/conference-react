import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Clock, DashLg } from "react-bootstrap-icons";
import "./TableSchedule.scss";

const TableSchedule = () => {
	// useEffect(() => {
	// 	const schedules = axios;
	// }, []);

	return (
		<Table
			striped
			hover
			variant='primary'
			className='mt-5'
		>
			<tbody className='text-center'>
				<tr>
					<td>
						<Clock /> 9:30 - 10:00
					</td>
					<td>
						<DashLg />
					</td>
					<td>
						Регистрация <br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</td>
				</tr>
				<tr>
					<td>9:30 - 10:00</td>
					<td>
						<DashLg />
					</td>
					<td>
						Регистрация <br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</td>
				</tr>
				<tr>
					<td>9:30 - 10:00</td>
					<td>
						<DashLg />
					</td>
					<td>
						Регистрация <br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</td>
				</tr>
				<tr>
					<td>9:30 - 10:00</td>
					<td>-</td>
					<td>
						Регистрация <br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default TableSchedule;

import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Title,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

export default function ProgressChart() {
	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May"],
		datasets: [
			{
				label: "Monthly Progress",
				data: [20, 40, 55, 65, 80],
				fill: true,
				backgroundColor: "rgba(0, 123, 255, 0.2)",
				borderColor: "rgba(0, 123, 255, 1)",
				tension: 0.4,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: "Monthly Progress",
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					callback: (value) => `${value}%`,
				},
			},
		},
	};

	return (
		<>
			<h3 className="font-bold text-lg mb-2 mt-5">Current Activities</h3>
			<div className="px-5 my-2 bg-paleWhite shadow-md rounded-lg">
				<Line
					data={data}
					options={options}
				/>
			</div>
		</>
	);
}

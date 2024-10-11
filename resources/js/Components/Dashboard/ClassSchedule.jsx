import React from "react";

const ClassSchedule = () => {
	const classes = [
		{
			name: "Animation",
			link: "Gmeet Link",
			day: "Mon",
			time: "8:30 am",
			timeZone: "Phil Time Zone",
			active: true,
		},
		{
			name: "Graphic Design",
			link: "Gmeet Link",
			day: "Mon",
			time: "8:30 am",
			timeZone: "Phil Time Zone",
			active: false,
		},
		{
			name: "Digital Media",
			link: "Gmeet Link",
			day: "Mon",
			time: "8:30 am",
			timeZone: "Phil Time Zone",
			active: false,
		},
		{
			name: "Web Design",
			link: "Gmeet Link",
			day: "Mon",
			time: "8:30 am",
			timeZone: "Phil Time Zone",
			active: false,
		},
	];

	return (
		<div className="p-4">
			<div className="flex flex-row justify-between items-center py-2">
				<div className="text-lg font-bold">Class Schedule</div>
				<div className="text-right text-sm text-oceanBlue">
					<a
						href="#"
						className="underline">
						View in Calendar Mode
					</a>
				</div>
			</div>

			{classes.map((classItem, index) => (
				<div
					key={index}
					className={`flex items-center justify-between p-4 mb-3 rounded-xl shadow-sm ${
						classItem.active ? "bg-oceanBlue text-white" : "bg-softBlue text-oceanBlue"
					}`}>
					<div className="flex-1">
						<span className="font-semibold">{classItem.name}</span>
					</div>

					<div className="flex-1 text-center">
						<a
							href="#"
							className="underline">
							{classItem.link}
						</a>
					</div>

					<div className="flex items-center gap-4 text-right">
						<span>{classItem.day}</span>
						<span>
							{classItem.time} ({classItem.timeZone})
						</span>
						<button className="text-xl">⋮</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ClassSchedule;

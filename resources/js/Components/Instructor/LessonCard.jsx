import React from "react";

const LessonCard = ({
	bgColor,
	buttonColor,
	fillColor,
	title,
	studentCount,
	onViewLessons,
	onAddLesson,
}) => {
	return (
		<div className="flex flex-col w-full gap-3">
			<div className={`relative ${bgColor} rounded-xl w-full p-4 shadow-md overflow-hidden`}>
				{/* Wavy Background */}
				<svg
					className="absolute inset-0 h-full w-full"
					viewBox="0 0 1440 320"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none">
					<path
						fill={fillColor}
						fillOpacity="1"
						d="M0,96L60,117.3C120,139,240,181,360,192C480,203,600,181,720,160C840,139,960,117,1080,128C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
				</svg>

				{/* Lesson Title */}
				<div className="relative text-white font-bold text-3xl mb-2">{title}</div>

				{/* Students Count and View Lessons Button */}
				<div className="relative flex flex-col justify-end gap-1 items-end">
					<p className="text-white text-4xl font-bold">{studentCount}</p>
					<p className="text-white text-2xl">Student/s</p>
					<button
						onClick={onViewLessons}
						className="bg-white text-black font-bold py-1 px-4 rounded-lg">
						View Lesson/s
					</button>
				</div>
			</div>

			{/* Add New Lesson Button */}
			<button
				onClick={onAddLesson}
				className={`w-full ${buttonColor} text-white font-normal py-2 rounded-xl shadow-md hover:bg-teal-600 transition duration-300`}>
				+ Add New Lesson
			</button>
		</div>
	);
};

export default LessonCard;

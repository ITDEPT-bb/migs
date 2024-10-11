import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React from "react";

const CourseCard = ({ bgColor, code, title, totalCourses, onViewCourses }) => {
	return (
		<div className="flex items-center gap-5 justify-between bg-white shadow-lg border rounded-2xl px-4 py-2 mb-2">
			{/* Code */}
			<span className={`bg-${bgColor} text-white w-10 h-10 flex items-center justify-center`}>
				{code}
			</span>

			{/* Course Info */}
			<div className="flex flex-col flex-grow">
				<h2 className="text-sm font-semibold">{title}</h2>
				<p className="text-gray-500 text-xs">{totalCourses} Course/s</p>
			</div>

			{/* View Courses Button */}
			<button
				onClick={onViewCourses}
				className={`bg-${bgColor} bg-opacity-30 text-${bgColor} text-xs rounded ml-12 px-2 py-1 hover:bg-${bgColor} hover:bg-opacity-40 transition duration-150`}>
				View Courses
			</button>

			{/* Ellipsis Icon */}
			<EllipsisHorizontalIcon className="h-6 w-6 text-gray-600" />
		</div>
	);
};

export default CourseCard;

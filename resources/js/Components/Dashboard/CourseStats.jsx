import { ArrowUpRightIcon, PlayIcon } from "@heroicons/react/24/solid";

const CourseStats = ({ title, description, icon: Icon, bgColor, iconColor }) => {
	return (
		<div
			className={`p-4 rounded-xl shadow-xl ${bgColor} text-white flex flex-col gap-2 justify-between items-start`}>
			<div>
				<h2 className="text-3xl font-bold">{title}</h2>
				<p className="text-md">{description}</p>
			</div>
			<div className="flex flex-row gap-2 justify-end items-end">
				<p className="text-sm mt-1">This is the Latest Data</p>

				<div className={`w-12 h-12 rounded-full flex justify-center items-center ${iconColor}`}>
					<Icon className="w-7 h-7" />
				</div>
			</div>
		</div>
	);
};

export default CourseStats;

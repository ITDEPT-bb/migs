import React from "react";
import CourseCard from "./CourseCard";
import CourseStats from "./CourseStats";
import { ArrowUpRightIcon, PlayIcon } from "@heroicons/react/24/solid";

const PopularCourses = () => {
	const courses = [
		{ code: "A", title: "Animation", totalCourses: 30, bgColor: "oceanBlue" },
		{ code: "GD", title: "Graphic Design", totalCourses: 30, bgColor: "rosePink" },
		{ code: "DM", title: "Digital Media", totalCourses: 30, bgColor: "mintTeal" },
		{ code: "VE", title: "Visual Effects (VFX)", totalCourses: 30, bgColor: "sunYellow" },
		{ code: "WD", title: "Web Design", totalCourses: 30, bgColor: "skyWater" },
	];

	const handleViewCourses = (course) => {
		console.log(`Viewing courses for ${course.title}`);
	};

	return (
		<div className="container mx-auto px-4">
			<div className="flex flex-row justify-between">
				<h1 className="text-xl font-bold mb-4">Popular Course/s</h1>
				<button className="text-md text-skyWater underline">All Courses</button>
			</div>
			<div className="flex flex-row gap-3">
				<div className="flex flex-col">
					{courses.map((course) => (
						<CourseCard
							key={course.code}
							code={course.code}
							bgColor={course.bgColor}
							title={course.title}
							totalCourses={course.totalCourses}
							onViewCourses={() => handleViewCourses(course)}
						/>
					))}
				</div>
				<div className="space-y-3">
					<CourseStats
						title="2349"
						description="Completed Course/s"
						icon={ArrowUpRightIcon}
						bgColor="bg-rosePink"
						iconColor="bg-white text-rosePink"
					/>
					<CourseStats
						title="3210"
						description="Video Course/s"
						icon={PlayIcon}
						bgColor="bg-mintTeal"
						iconColor="bg-white text-mintTeal"
					/>
				</div>
			</div>
		</div>
	);
};

export default PopularCourses;

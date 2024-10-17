import InstructorLayout from "@/Layouts/InstructorLayout";
import { Head } from "@inertiajs/react";
import dayjs from "dayjs";

import AccountNumber from "@/Components/Instructor/AccountNumber";
import MemberCounts from "@/Components/Student/MemberCount";

import instructorBoy from "/public/image/Dashboard/instructorBoy.png";
import instructorGirl from "/public/image/Dashboard/instructorGirl.png";
import LessonCard from "@/Components/Instructor/LessonCard";
import StudentProgress from "@/Components/Instructor/StudentProgress";

export default function Dashboard({ auth, studentCount, instructorCount }) {
	const formatDate = (date) => {
		return dayjs(date).format("MMMM D, YYYY");
	};

	const handleViewLessons = () => {
		console.log("Viewing lessons...");
		// Add navigation or logic here
	};

	const handleAddLesson = () => {
		console.log("Adding a new lesson...");
		// Add logic for adding a new lesson
	};

	return (
		<InstructorLayout
			user={auth.user}
			header={
				<h2 className="font-bold text-xl  sm:text-2xl lg:text-3xl text-black dark:text-gray-200 sm:text-left">
					Dashboard
				</h2>
			}
			number={<AccountNumber accountNumber={auth.user.role_id} />}>
			<Head title="Dashboard" />

			<div className="py-2 bg-gray-100">
				<div className="flex mx-auto gap-2 sm:px-4 lg:px-6">
					<div className="flex-auto justify-center items-center px-5 py-8 w-80 gap-4 bg-gradient-to-r from-aquaWave via-skyWater to-oceanBlue dark:bg-gray-800 overflow-hidden shadow-md sm:rounded-2xl flex flex-col sm:flex-row">
						<div className="flex flex-col gap-1 sm:flex-grow">
							<p className="text-white text-lg">
								Member Since:{" "}
								<span className="text-sunYellow">{formatDate(auth.user.created_at)}</span>
							</p>
							<h2 className="text-5xl font-bold text-white">
								Welcome back, Instructor <strong>{auth.user.name}</strong>!
							</h2>
							<p className="text-white text-lg">
								Your Students completed <span className="text-sunYellow">80%</span> of the task.
							</p>
							<p className="text-white text-lg">
								Progress is <span className="text-sunYellow">Very Good!</span>
							</p>
						</div>
						<div className="flex-shrink-0">
							<img
								src={auth.user.gender === "male" ? instructorBoy : instructorGirl}
								alt="Logo"
								className="h-48 w-auto overflow-auto bg-softBlue rounded-full"
							/>
						</div>
					</div>

					<div className="flex-auto p-2 w-32 gap-4 dark:bg-gray-800 overflow-hidden">
						<div className="mb-3">
							<h1 className="text-3xl text-center font-bold px-2 mb-4">
								Have More <span className="text-black">KNOWLEDGE</span> to{" "}
								<span className="text-black">SHARE</span>?
							</h1>

							<div className="flex justify-center">
								<button className="flex w-full justify-center items-center gap-2 bg-skyWater text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-600 transition duration-300">
									<span className="text-lg">+</span>
									<span>Create New Course</span>
								</button>
							</div>
						</div>

						<h1 className="text-xl font-bold px-2">Members Count</h1>
						<MemberCounts
							studentCount={studentCount}
							instructorCount={instructorCount}
						/>
					</div>
				</div>

				<div className="flex mx-auto gap-2 sm:px-4 lg:px-6">
					<div className="flex flex-col flex-auto py-6 w-80 gap-4 dark:bg-gray-800 overflow-hidden sm:rounded-2xl">
						{/* Course Instructors */}
						<div className="flex flex-row justify-between items-center px-2">
							<h1 className="text-xl font-bold">Course/s</h1>
							<button className="text-lg text-skyWater underline">All Courses</button>
						</div>

						{/* Grid for LessonCards */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<LessonCard
								title="Animation"
								bgColor="bg-mintTeal"
								buttonColor="bg-mintTeal"
								fillColor="#89d6ca"
								studentCount={124}
								onViewLessons={handleViewLessons}
								onAddLesson={handleAddLesson}
							/>
							<LessonCard
								title="Graphic Design"
								bgColor="bg-royalPurple"
								buttonColor="bg-royalPurple"
								fillColor="#8e61e8"
								studentCount={124}
								onViewLessons={handleViewLessons}
								onAddLesson={handleAddLesson}
							/>
							<LessonCard
								title="Digital Media"
								bgColor="bg-sunYellow"
								buttonColor="bg-sunYellow"
								fillColor="#fcdc62"
								studentCount={124}
								onViewLessons={handleViewLessons}
								onAddLesson={handleAddLesson}
							/>
							<LessonCard
								title="Web Design"
								bgColor="bg-rosePink"
								buttonColor="bg-rosePink"
								fillColor="#d15473"
								studentCount={124}
								onViewLessons={handleViewLessons}
								onAddLesson={handleAddLesson}
							/>
						</div>

						<div>
							<StudentProgress />
						</div>
					</div>

					<div className="flex flex-col flex-auto py-6 px-2 w-32 gap-2 dark:bg-gray-800 overflow-hidden">
						<div className="flex flex-row justify-between items-center">
							<h1 className="text-xl font-bold text-red-600">Daily Notice/s</h1>
						</div>

						{/* Daily Notices */}
						<div className="bg-yellow-100 p-4 rounded-lg shadow-lg">
							<div className="space-y-2">
								<div className="text-sm">
									<strong>Updates:</strong> Juan Dela Cruz has successfully completed the{" "}
									<strong>Animation</strong> activity in <strong>Lesson 3</strong>.
								</div>
								<div className="text-sm">
									<strong>Updates:</strong> Juan Dela Cruz has successfully completed the{" "}
									<strong>Animation</strong> activity in <strong>Lesson 3</strong>.
								</div>
								<div className="text-sm">
									<strong>Updates:</strong> Juan Dela Cruz has successfully completed the{" "}
									<strong>Animation</strong> activity in <strong>Lesson 3</strong>.
								</div>
								<div className="text-sm">
									<strong>Updates:</strong> Juan Dela Cruz has successfully completed the{" "}
									<strong>Animation</strong> activity in <strong>Lesson 3</strong>.
								</div>
								<div className="text-sm">
									<strong>Updates:</strong> Juan Dela Cruz has successfully completed the{" "}
									<strong>Animation</strong> activity in <strong>Lesson 3</strong>.
								</div>
								<div className="text-sm">
									<strong>Updates:</strong> Juan Dela Cruz has successfully completed the{" "}
									<strong>Animation</strong> activity in <strong>Lesson 3</strong>.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</InstructorLayout>
	);
}

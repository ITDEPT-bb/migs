import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import dayjs from "dayjs";

import AccountNumber from "@/Components/Student/AccountNumber";
import DashboardStats from "@/Components/Student/StatsCard";
import MemberCounts from "@/Components/Student/MemberCount";
import PopularCourses from "@/Components/Student/PopularCourses";
import AvatarGroup from "@/Components/Student/AvatarGroup";
import NoticeList from "@/Components/Student/NoticeList";
import StatsBlock from "@/Components/Student/StatsBlock";
import ProgressChart from "@/Components/Student/ProgressChart";
import ClassSchedule from "@/Components/Student/ClassSchedule";

import vectorBoy from "/public/image/Dashboard/studentBoy.png";
import vectorGirl from "/public/image/Dashboard/studentGirl.png";

export default function Dashboard({ auth, studentCount, instructorCount }) {
	const formatDate = (date) => {
		return dayjs(date).format("MMMM D, YYYY");
	};

	const instructorImages = [
		"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
		"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
		"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
	];

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<h2 className="font-bold text-xl  sm:text-2xl lg:text-3xl text-black dark:text-gray-200 sm:text-left">
					Student Dashboard
				</h2>
			}
			number={<AccountNumber accountNumber={auth.user.role_id} />}>
			<Head title="Dashboard" />

			<div className="py-2 bg-gray-100">
				<div className="flex mx-auto gap-2 sm:px-4 lg:px-6">
					<div className="flex-auto items-center px-5 py-8 w-80 gap-4 bg-gradient-to-r from-aquaWave via-skyWater to-oceanBlue dark:bg-gray-800 overflow-hidden shadow-md sm:rounded-2xl flex flex-col sm:flex-row">
						<div className="flex flex-col gap-1 sm:flex-grow">
							<p className="text-white text-lg">Member Since: {formatDate(auth.user.created_at)}</p>
							<h2 className="text-4xl font-bold text-white">
								Welcome back,{" "}
								<strong>
									{auth.user.name} {auth.user.surname}
								</strong>
								!
							</h2>
							<p className="text-white text-lg">Always stay updated in your Student Dashboard!</p>
							<DashboardStats />
						</div>
						<div className="flex-shrink-0">
							<img
								src={auth.user.gender === "male" ? vectorBoy : vectorGirl}
								alt="Logo"
								className="h-48 w-auto overflow-auto bg-softBlue rounded-full"
							/>
						</div>
					</div>

					<div className="flex-auto p-2 w-32 gap-4 dark:bg-gray-800 overflow-hidden">
						<h1 className="text-xl font-bold px-2">Members Count</h1>
						<MemberCounts
							studentCount={studentCount}
							instructorCount={instructorCount}
						/>
						<h1 className="text-xl font-bold px-2 mb-4">Completed Projects</h1>
						<StatsBlock
							title="Completed Projects"
							value="1892"
							buttonText="View All"
							bgColor="bg-skyWater"
						/>
					</div>
				</div>

				<div className="flex mx-auto gap-2 sm:px-4 lg:px-6">
					<div className="flex-auto py-6 w-80 gap-4 dark:bg-gray-800 overflow-hidden sm:rounded-2xl">
						<PopularCourses />
						<ProgressChart />
						<ClassSchedule />
					</div>

					<div className="flex-auto py-6 px-2 w-32 gap-4 dark:bg-gray-800 overflow-hidden">
						<div className="flex flex-row justify-between">
							<h1 className="text-xl font-bold mb-4">Course Instructor/s</h1>
							<button className="text-md text-skyWater underline">See All</button>
						</div>

						<AvatarGroup images={instructorImages} />

						<div className="flex flex-row justify-between mt-8">
							<h1 className="text-xl font-bold mb-4">Daily Notice/s</h1>
							<button className="text-md text-skyWater underline">See All</button>
						</div>

						<NoticeList />
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}

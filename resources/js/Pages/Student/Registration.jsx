import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import AccountNumber from "@/Components/Student/AccountNumber";
import ProfileCard from "@/Components/Student/ProfileCard";
import BioSection from "@/Components/Student/BioSection";
import SocialAccounts from "@/Components/Student/SocialAccounts";

export default function Registration({ user, auth }) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<h2 className="font-bold text-xl flex items-center gap-2 sm:text-2xl lg:text-3xl text-black dark:text-gray-200 sm:text-left">
					Registration{" "}
					<span className="text-oceanBlue italic text-xs">(Registered as Student)</span>
				</h2>
			}
			number={<AccountNumber accountNumber={user.data.role_id} />}>
			<Head title="Registration" />

			<div className="py-2 bg-gray-100">
				<div className="flex justify-end mx-auto sm:px-4 lg:px-6">
					<button
						type="button"
						class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
						Edit
					</button>
				</div>
				<div className="flex mx-auto sm:px-4 lg:px-6">
					<div className="flex-auto px-5 w-80 gap-4 overflow-hidden flex flex-col sm:flex-row">
						<ProfileCard user={user} />
						<BioSection user={user} />
					</div>
					<div className="flex-auto px-5 py-8 w-32 gap-4 overflow-hidden">
						<SocialAccounts />
					</div>
					{/* <div className="flex flex-wrap">
						<PersonalitySliders />
					<GoalsSection />
					<CoursesCompleted />
					<StatusSection />
					</div> */}
				</div>
			</div>
		</AuthenticatedLayout>
	);
}

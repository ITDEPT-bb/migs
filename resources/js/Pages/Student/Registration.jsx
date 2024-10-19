import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import AccountNumber from "@/Components/Student/AccountNumber";
import ProfileCard from "@/Components/Student/ProfileCard";
import BioSection from "@/Components/Student/BioSection";
import SocialAccounts from "@/Components/Student/SocialAccounts";

export default function Registration({ user, auth }) {
	console.log(user);
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
				<div className="flex mx-auto sm:px-4 lg:px-6">
					<div className="flex-auto px-5 py-8 w-80 gap-4 overflow-hidden flex flex-col sm:flex-row">
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

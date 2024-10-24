import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

import AccountNumber from "@/Components/Student/AccountNumber";
import ProfileCard from "@/Components/Student/ProfileCard";
import BioSection from "@/Components/Student/BioSection";
import SocialAccounts from "@/Components/Student/SocialAccounts";
import Modal from "@/Components/Modal";
import UpdateProfileInformation from "../Profile/Partials/UpdateProfileInformationForm";
import UpdatePasswordForm from "../Profile/Partials/UpdatePasswordForm";
import GoalsSection from "@/Components/Student/GoalsSection";
import ApplicationList from "@/Components/Student/ApplicationList";

export default function Registration({ user, auth, mustVerifyEmail, status, goals }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
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
						onClick={openModal}
						className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
						Edit
					</button>
				</div>
				<div className="flex mx-auto sm:px-4 lg:px-6">
					<div className="flex-auto px-5 h-full w-40 gap-4 overflow-hidden flex flex-col">
						<ProfileCard user={user} />
						<ApplicationList />
					</div>
					<div className="flex-auto px-5 w-40 gap-4 overflow-hidden">
						<div className="flex flex-col gap-4">
							<BioSection user={user} />
							<GoalsSection goals={goals} />
						</div>
					</div>
					<div className="flex-auto px-5 py-8 w-40 gap-4 overflow-hidden">
						<SocialAccounts />
					</div>
				</div>
			</div>
			<Modal
				show={isModalOpen}
				onClose={closeModal}
				maxWidth="7xl">
				<div className="px-1">
					<div className="p-4 sm:p-6 bg-white dark:bg-gray-800 sm:rounded-lg">
						<UpdateProfileInformation
							mustVerifyEmail={mustVerifyEmail}
							status={status}
							onSuccess={closeModal}
						/>
					</div>

					{/* <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
						<UpdatePasswordForm className="max-w-xl" />
					</div> */}
				</div>
			</Modal>
		</AuthenticatedLayout>
	);
}

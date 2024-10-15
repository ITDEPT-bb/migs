import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import AccountNumber from "@/Components/Student/AccountNumber";

export default function Project({ auth }) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<h2 className="font-bold text-xl  sm:text-2xl lg:text-3xl text-black dark:text-gray-200 sm:text-left">
					Project/s
				</h2>
			}
			number={<AccountNumber accountNumber={auth.user.role_id} />}>
			<Head title="Project/s" />
		</AuthenticatedLayout>
	);
}

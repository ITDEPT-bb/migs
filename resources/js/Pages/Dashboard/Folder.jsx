import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import AccountNumber from "@/Components/Dashboard/AccountNumber";

export default function Folder({ auth }) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<h2 className="font-bold text-xl  sm:text-2xl lg:text-3xl text-black dark:text-gray-200 sm:text-left">
					Folder
				</h2>
			}
			number={<AccountNumber accountNumber={auth.user.id} />}>
			<Head title="Folder" />
		</AuthenticatedLayout>
	);
}

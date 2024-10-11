import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import AccountNumber from "@/Components/Dashboard/AccountNumber";

export default function Registration({ auth }) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<h2 className="font-bold text-xl  sm:text-2xl lg:text-3xl text-black dark:text-gray-200 sm:text-left">
					Registration
				</h2>
			}
			number={<AccountNumber accountNumber={auth.user.id} />}>
			<Head title="Registration" />
		</AuthenticatedLayout>
	);
}

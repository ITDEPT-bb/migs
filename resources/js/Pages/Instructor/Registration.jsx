import InstructorLayout from "@/Layouts/InstructorLayout";
import { Head } from "@inertiajs/react";

import AccountNumber from "@/Components/Instructor/AccountNumber";

export default function Registration({ auth }) {
	return (
		<InstructorLayout
			user={auth.user}
			header={
				<h2 className="font-bold text-xl  sm:text-2xl lg:text-3xl text-black dark:text-gray-200 sm:text-left">
					Registration
				</h2>
			}
			number={<AccountNumber accountNumber={auth.user.role_id} />}>
			<Head title="Registration" />
		</InstructorLayout>
	);
}

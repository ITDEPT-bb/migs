import { AcademicCapIcon, ClipboardDocumentIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

const StatsCard = ({ title, value, icon, bgColor }) => (
	<div className="flex flex-row gap-2 items-center justify-center">
		<div className={`rounded-full border border-white p-2 ${bgColor}`}>{icon}</div>
		<div className="flex flex-col">
			<p className="text-sm text-white font-light tracking-tighter">{title}</p>
			<p className="text-sm text-white font-light tracking-tighter">{value}</p>
		</div>
	</div>
);

const DashboardStats = () => (
	<div className="flex gap-3 p-2">
		<StatsCard
			title="Enrolled Courses"
			value="3102"
			icon={<AcademicCapIcon className="h-8 w-8 text-white" />}
			bgColor="bg-rosePink"
		/>
		<StatsCard
			title="Certificates"
			value="300"
			icon={<ClipboardDocumentIcon className="h-8 w-8 text-white" />}
			bgColor="bg-sunYellow"
		/>
		<StatsCard
			title="Ongoing Projects"
			value="1287"
			icon={<ArrowPathIcon className="h-8 w-8 text-white" />}
			bgColor="bg-mintTeal"
		/>
	</div>
);

export default DashboardStats;

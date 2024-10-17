const MemberCount = ({ role, count, bgColor, textColor }) => (
	<div className={`flex w-full flex-col ${bgColor} shadow-md rounded-2xl p-2`}>
		<div className="flex justify-between">
			<p className={`text-left ${textColor}`}>{role}</p>
		</div>
		<div className="flex-grow flex items-end justify-end">
			<p className={`self-end font-bold text-xl ${textColor}`}>{count}</p>
		</div>
	</div>
);

const MemberCounts = ({ studentCount, instructorCount }) => (
	<div className="flex flex-row justify-between gap-5 p-2">
		<MemberCount
			role="Student/s"
			count={studentCount}
			bgColor="bg-white"
			textColor="text-oceanBlue"
		/>
		<MemberCount
			role="Instructor/s"
			count={instructorCount}
			bgColor="bg-oceanBlue"
			textColor="text-white"
		/>
	</div>
);

export default MemberCounts;

export default function NoticeList() {
	const notices = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Ut enim ad minim veniam, quis nostrud exercitation.",
		"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Ut enim ad minim veniam, quis nostrud exercitation.",
		"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Ut enim ad minim veniam, quis nostrud exercitation.",
		"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	];

	return (
		<div className="flex flex-col bg-white rounded-xl p-5 gap-2">
			{notices.map((notice, idx) => (
				<div key={idx}>
					<h1 className="text-lg font-bold">Project Due Date/s</h1>
					<p className="text-sm truncate">{notice}</p>
				</div>
			))}
		</div>
	);
}

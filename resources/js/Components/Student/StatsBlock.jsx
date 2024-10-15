export default function StatsBlock({ title, value, buttonText, bgColor }) {
	return (
		<div
			className={`w-full flex flex-row justify-between items-center ${bgColor} rounded-2xl py-2 px-4`}>
			<h1 className="text-white text-4xl font-bold">{value}</h1>
			<button className="rounded-lg bg-cloudWhite text-oceanBlue font-semibold px-4 py-2 hover:bg-gray-200 transition duration-150">
				{buttonText}
			</button>
		</div>
	);
}

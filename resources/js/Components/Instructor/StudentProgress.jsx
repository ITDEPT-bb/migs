import React from "react";

const StudentProgress = ({ name, imageUrl, progress }) => {
	const getProgressColor = (progress) => {
		if (progress === 100) return "bg-royalPurple";
		if (progress >= 80) return "bg-rosePink";
		if (progress >= 50) return "bg-mintTeal";
		return "bg-sunYellow";
	};

	return (
		<div className="flex items-center justify-between mb-4">
			<div className="flex items-center gap-3">
				<img
					src={imageUrl}
					alt={name}
					className="w-12 h-12 rounded-full object-cover"
				/>
				<p className="font-medium text-lg">{name}</p>
			</div>

			<div className="flex items-center gap-4">
				<div className="w-48 bg-gray-300 rounded-full h-2">
					<div
						className={`${getProgressColor(progress)} h-2 rounded-full`}
						style={{ width: `${progress}%` }}></div>
				</div>

				<div
					className={`w-14 h-8 flex items-center justify-center rounded-lg ${getProgressColor(
						progress
					)} text-white font-bold`}>
					{progress}%
				</div>
			</div>
		</div>
	);
};

const StudentsProgress = ({ students }) => {
	return (
		<div className="p-6 bg-white rounded-lg shadow-md w-full">
			<div className="flex justify-between items-center mb-6">
				{/* Title */}
				<h2 className="text-2xl font-bold">Students Progress</h2>

				{/* View List Button */}
				<button className="bg-oceanBlue hover:bg-blue-700 text-white font-semibold px-4 py-1 rounded-lg">
					View List
				</button>
			</div>

			{/* List of Students */}
			{students.map((student, index) => (
				<StudentProgress
					key={index}
					name={student.name}
					imageUrl={student.imageUrl}
					progress={student.progress}
				/>
			))}
		</div>
	);
};

// Example usage with dummy data
const App = () => {
	const students = [
		{
			name: "Juan Dela Cruz",
			imageUrl:
				"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
			progress: 100,
		},
		{
			name: "Juan Dela Cruz",
			imageUrl:
				"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
			progress: 80,
		},
		{
			name: "Juan Dela Cruz",
			imageUrl:
				"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
			progress: 50,
		},
		{
			name: "Juan Dela Cruz",
			imageUrl:
				"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
			progress: 40,
		},
	];

	return <StudentsProgress students={students} />;
};

export default App;

const ProfileCard = ({ user }) => {
	const calculateAge = (birthday) => {
		const today = new Date();
		const birthDate = new Date(birthday);
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDifference = today.getMonth() - birthDate.getMonth();

		if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	};

	const age = calculateAge(user.data.birthday);

	return (
		<div className="bg-white p-6 shadow-lg rounded-lg w-full text-center flex flex-col items-center">
			<div className="flex justify-center mb-6">
				<img
					src={user.data.avatar_url}
					alt="Profile"
					className="rounded-full w-32 h-32 border-4 border-oceanBlue"
				/>
			</div>

			<h2 className="text-3xl font-bold text-oceanBlue">
				{user.data.name} {user.data.surname}
			</h2>
			<p className="text-skyWater mb-1">{user.data.role_id}</p>
			<p className="text-oceanBlue font-semibold mb-2">
				Student <span className="text-green-500">✔</span>
			</p>

			<p className="italic text-oceanBlue mb-4 text-center">"{user.data.quote}"</p>

			<div className="flex flex-col w-full bg-softCyan bg-opacity-25 p-4 rounded-xl">
				<div className="flex justify-between mb-1">
					<p className="text-oceanBlue font-semibold">Age:</p>
					<p className="text-skyWater font-normal">{age}</p>
				</div>
				<div className="flex justify-between mb-1">
					<p className="text-oceanBlue font-semibold">Gender:</p>
					<p className="text-skyWater font-normal">{user.data.gender}</p>
				</div>
				<div className="flex justify-between mb-1">
					<p className="text-oceanBlue font-semibold">Address:</p>
					<p className="text-skyWater font-normal">
						{user.data.country} {user.data.city}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;

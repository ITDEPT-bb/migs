const BioSection = ({ user }) => {
	return (
		<div className="bg-white p-6 shadow-lg rounded-lg w-full">
			<h3 className="text-2xl font-bold text-oceanBlue mb-4">Bio</h3>
			<p className="text-oceanBlue font-semibold leading-relaxed">
				{user.data.bio ? (
					`"${user.data.bio}"`
				) : (
					<span className="text-gray-500 italic">No bio available. Please add your bio.</span>
				)}
			</p>
		</div>
	);
};

export default BioSection;

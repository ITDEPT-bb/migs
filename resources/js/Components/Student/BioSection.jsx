const BioSection = ({ user }) => {
	return (
		<div className="bg-white p-6 shadow-lg rounded-lg w-full">
			<h3 className="text-xl font-bold text-skyWater mb-4">Bio</h3>
			<p className="text-skyWater font-semibold leading-relaxed">{user.data.bio}</p>
		</div>
	);
};

export default BioSection;

export default function AvatarGroup({ images = [] }) {
	return (
		<div className="flex flex-row gap-3 justify-evenly">
			{images.map((image, idx) => (
				<img
					key={idx}
					className="w-28 h-28 rounded-full border-2 border-oceanBlue"
					src={image}
					alt="Rounded avatar"
				/>
			))}
		</div>
	);
}

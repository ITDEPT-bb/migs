import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const Advertisements = ({ ads }) => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div
			data-aos="fade-up"
			className="flex flex-col sm:flex-row gap-2 justify-center px-4">
			{ads.map((ad) => (
				<div
					key={ad.id}
					className="w-full sm:w-1/2 xl:w-1/2 p-4">
					<a
						href={ad.url}
						target="_blank"
						rel="noopener noreferrer">
						<img
							src={ad.image_url}
							alt={ad.name}
							className="w-full h-auto shadow-xl rounded-md border-2 border-white"
						/>
					</a>
				</div>
			))}
		</div>
	);
};

Advertisements.propTypes = {
	ads: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			image_url: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Advertisements;

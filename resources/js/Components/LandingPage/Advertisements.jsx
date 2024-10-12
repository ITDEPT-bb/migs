import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const Advertisements = ({ ads }) => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="flex flex-col sm:flex-row gap-2 justify-center px-4">
			{ads.length > 0 ? (
				ads.map((ad) => (
					<div
						key={ad.id}
						className="w-full sm:w-1/2 xl:w-1/2 p-4"
						data-aos="fade-up">
						<a
							href={ad.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Advertisement: ${ad.name}`}>
							<img
								src={ad.image_url}
								alt={ad.name}
								className="w-full h-auto shadow-xl rounded-md border-2 border-white"
							/>
						</a>
					</div>
				))
			) : (
				<div
					className="w-full text-center p-4"
					aria-live="polite">
					<p className="text-lg">No advertisements available</p>
				</div>
			)}
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

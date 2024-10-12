import { Link, Head } from "@inertiajs/react";
import {
	Hero,
	AboutUs,
	MissionVisionValues,
	Programs,
	AdditionalPrograms,
	WhyChooseUs,
	Testimonials,
	ContactUs,
} from "@/Sections";
import { Navbar, Footer, Advertisements } from "@/Components/LandingPage";

const chunkArray = (array, size) => {
	const result = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
};

export default function Welcome({
	auth,
	heroes,
	programs,
	additionalPrograms,
	testimonials,
	WhyChooseUsItems,
	advertisements,
}) {
	const adsChunks = chunkArray(advertisements, 2);

	return (
		<>
			<Head title="Welcome" />
			<Navbar auth={auth} />

			<section
				id="hero"
				className="max-w-7xl mx-auto">
				<Hero heroes={heroes} />
			</section>

			<section className="py-10 bg-primary">
				<section className="max-w-7xl mx-auto">
					{adsChunks[0] ? (
						<Advertisements ads={adsChunks[0]} />
					) : (
						<p
							aria-live="polite"
							className="text-white text-center">
							No advertisements available at the moment.
						</p>
					)}
				</section>
			</section>

			<section
				id="about-us"
				className="max-w-7xl mx-auto">
				<AboutUs />
			</section>

			<MissionVisionValues />

			<section
				id="programs"
				className="bg-bgSkyBlue">
				<Programs programs={programs} />
			</section>

			<section>
				<AdditionalPrograms additionalPrograms={additionalPrograms} />
			</section>

			<section className="py-10 bg-primary">
				<section className="max-w-7xl mx-auto">
					{adsChunks[1] ? (
						<Advertisements ads={adsChunks[1]} />
					) : (
						<p
							aria-live="polite"
							className="text-white text-center">
							No advertisements available at the moment.
						</p>
					)}
				</section>
			</section>

			<WhyChooseUs WhyChooseUsItems={WhyChooseUsItems} />

			<section className="py-10 bg-primary">
				<section className="max-w-7xl mx-auto">
					{adsChunks[2] ? (
						<Advertisements ads={adsChunks[2]} />
					) : (
						<p
							aria-live="polite"
							className="text-white text-center">
							No advertisements available at the moment.
						</p>
					)}
				</section>
			</section>

			<section id="testimonials">
				<Testimonials testimonials={testimonials} />
			</section>

			<section id="contact-us">
				<ContactUs />
			</section>

			<Footer />
		</>
	);
}

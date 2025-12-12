import React from "react";
import Logo from "/public/image/Footer/LOGO 1.png";

const Footer = () => {
	const links = [
		{
			title: "Quick Links",
			items: [
				{ name: "Home", href: "#hero", isActive: true },
				{ name: "About Us", href: "#about-us", isActive: false },
				{ name: "Services", href: "#programs", isActive: false },
				{
					name: "Testimonials",
					href: "#testimonials",
					isActive: false,
				},
				{ name: "Contact Us", href: "#contact-us", isActive: false },
			],
		},
		{
			title: "Follow us",
			items: [
				{
					name: "Facebook",
					url: "https://www.facebook.com/Migsinstitute4graphics/",
				},
				{
					name: "Youtube",
					url: "https://www.youtube.com/@MigsMastersInstituteforGraphic",
				},
			],
		},
		{
			title: "Legal",
			items: [
				{ name: "Privacy Policy", href: "/policy" },
				{ name: "Terms & Conditions", href: "/terms" },
				{ name: "FAQs", href: "/faqs" },
				{ name: "Copyright", href: "/copyright" },
			],
		},
	];

	return (
		<footer className="bg-primary dark:bg-gray-900 pt-4">
			<div className="container mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between gap-8">
					<div className="mb-6 md:mb-0 flex sm:flex-col gap-2 items-center sm:items-center sm:justify-start">
						<a
							href="#"
							className="flex items-center">
							<img
								src={Logo}
								className="h-28 w-28"
								alt="MIGSINC Logo"
							/>
						</a>
						<h2 className="text-2xl uppercase text-white font-lora dark:text-white">MIGSINC</h2>
					</div>
					<div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
						{links.map((section, index) => (
							<div key={index}>
								<h2 className="mb-2 text-md font-semibold text-white uppercase dark:text-white">
									{section.title}
								</h2>
								<ul className="text-white dark:text-gray-400 font-medium list-disc list-inside">
									{section.items.map((item, idx) => (
										<li key={idx}>
											<a
												href={item.href || item.url}
												className="hover:underline text-sm"
												target={
													section.title === "Follow us" || section.title === "Legal"
														? "_blank"
														: "_self"
												}
												rel={
													section.title === "Follow us" || section.title === "Legal"
														? "noopener noreferrer"
														: ""
												}>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="max-w-xl lg:max-w-lg sm:mt-0 mt-10">
						<h2 className="text-md font-bold tracking-tight text-white sm:text-lg">
							Subscribe to our newsletter.
						</h2>
						<p className="text-md mt-1 leading-normal text-white">
							Do you want to get notified when an update is added to MIGS? Sign up for our
							newsletter.
						</p>
						<div className="mt-3 flex max-w-md gap-x-4">
							<label
								htmlFor="email-address"
								className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="min-w-0 flex-auto rounded-md border-0 placeholder-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								placeholder="Enter your email"
							/>
							<button
								type="submit"
								className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-dark shadow-sm hover:bg-skyBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
								Subscribe
							</button>
						</div>
					</div>
				</div>
                
				<hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-white dark:text-gray-400">
						© 2025{" "}
						<a
							href="#"
							className="hover:underline">
							MIGSINC
						</a>
						. All Rights Reserved.
					</span>
					<div className="flex mt-4 sm:mt-0">
						<span className="text-sm text-white dark:text-gray-400">
							Designed & Developed By{" "}
							<a
								href="https://bb88advertising.com/"
								target="_blank"
								className="hover:underline">
								BB 88 Advertising and Digital Solutions Inc.
							</a>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

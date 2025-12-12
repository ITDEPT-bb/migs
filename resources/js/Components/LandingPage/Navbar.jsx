import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

import logo from "/public/image/Hero/LOGO.png";
import smallLogo from "/public/image/Hero/LOGO 1.png";

const menuItems = [
	{ name: "Home", href: "#hero", isActive: true },
	{ name: "About Us", href: "#about-us", isActive: false },
	{ name: "Services", href: "#programs", isActive: false },
	// { name: "Our Team", href: "#programs", isActive: false },
	{ name: "Testimonials", href: "#testimonials", isActive: false },
	{ name: "Contact Us", href: "#contact-us", isActive: false },
];

import FBicon from "/public/image/Hero/F.png";
import YTicon from "/public/image/Hero/YT.png";
import IGicon from "/public/image/Hero/IG.png";

import ESWFLogo from "/public/image/Footer/eswf.png";
import ESWFALogo from "/public/image/Footer/eswfa.png";

// Define social media links
const socialLinks = [
	{
		href: "https://www.facebook.com/Migsinstitute4graphics/",
		icon: FBicon,
		alt: "Facebook",
	},
	{
		href: "https://www.youtube.com/@MigsMastersInstituteforGraphic",
		icon: YTicon,
		alt: "YouTube",
	},
	{ href: "https://instagram.com", icon: IGicon, alt: "Instagram" },
];

const Navbar = ({ auth }) => {
	return (
		<>
			<nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
			  <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
			    
			    {/* Logo Section */}
			    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
			      <img src={logo} alt="Logo" className="h-12 w-auto hidden md:block" />
			      <img src={smallLogo} alt="Small Logo" className="h-12 w-auto block md:hidden" />
			    </a>
			    {/* Partner Section */}
			    <div className="flex flex-col md:flex-row items-center gap-4 text-center">
				  <span className="font-semibold text-gray-900 dark:text-white">Official Partner of</span>

				  <a href="#" className="flex flex-col items-center group relative">
				    <img
				      src={ESWFALogo}
				      className="h-auto w-28 sm:w-36 md:w-48 bg-primary dark:bg-transparent px-3 py-2 rounded"
				      alt="World Esports and Digital Sports Academy Logo"
				    />
				    <span className="absolute top-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
				      World Esports and Digital Sports Academy
				    </span>
				  </a>

				  <span className="hidden md:inline font-semibold text-gray-900 dark:text-white">and</span>

				  <a
				    href="https://eswfworldcup.org/"
				    target="_blank"
				    className="flex flex-col items-center group relative"
				  >
				    <img
				      src={ESWFLogo}
				      className="h-auto w-24 sm:w-28 md:w-36 bg-primary dark:bg-transparent px-3 py-3.5 rounded"
				      alt="ESWF Logo"
				    />
				    <span className="absolute top-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
				      ESports World Federation
				    </span>
				  </a>
				</div>

			  </div>
			</nav>

			{/* Sticky Navigation */}
			{/* <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50"> */}
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="navbar-default"
						aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div
						className="hidden w-full md:block"
						id="navbar-default">
						<div className="flex justify-between items-center">
							<ul className="w-full md:w-auto font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								{menuItems.map((item, index) => (
									<li key={index}>
										<a
											href={item.href}
											className={`block py-1 px-3 text-lg tight rounded ${
												item.isActive
													? "text-accent font-arialRounded tracking-tight hover:underline bg-skyBlue md:bg-transparent md:text-accent dark:text-white md:dark:text-blue-500"
													: "text-accent font-arialRounded tracking-tight hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
											}`}
											aria-current={item.isActive ? "page" : undefined}>
											{item.name}
										</a>
									</li>
								))}

								{auth.user ? (
							        <>
							            <li>
							                <Link
							                    href={auth.user.role === "instructor" ? route("instructorDashboard") : route("dashboard")}
							                    className="block sm:hidden font-normal py-1 px-3 text-lg font-bold hover:underline text-accent font-arialRounded tracking-tight hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							                >
							                    {auth.user.role === "instructor" ? "Instructor Dashboard" : "Dashboard"}
							                </Link>
							            </li>
							            <li>
							                <Link
							                    href={route("logout")}
							                    method="post"
							                    className="block sm:hidden font-normal py-1 px-3 text-lg font-bold hover:underline text-accent font-arialRounded tracking-tight hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							                >
							                    Sign Out
							                </Link>
							            </li>
							        </>
							    ) : (
							        <>
							            <li>
							                <Link href="/login" className="block sm:hidden font-normal py-1 px-3 text-lg font-bold hover:underline text-accent font-arialRounded tracking-tight hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
							                    Sign In
							                </Link>
							            </li>
							            <li>
							                <Link href="/register" className="block sm:hidden font-normal py-1 px-3 text-lg font-bold hover:underline text-accent font-arialRounded tracking-tight hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
							                    Sign Up
							                </Link>
							            </li>
							        </>
							    )}	
							</ul>
							<div className="hidden sm:flex items-center space-x-2">
								{auth.user ? (
									<>
										{auth.user.role === "instructor" ? (
											<Link
												href={route("instructorDashboard")}
												className="font-bold text-md md:text-xl hover:underline dark:text-white">
												Instructor Dashboard
											</Link>
										) : (
											<Link
												href={route("dashboard")}
												className="font-bold text-md md:text-xl hover:underline dark:text-white">
												Dashboard
											</Link>
										)}
										<span className="text-dark dark:text-white">|</span>
										<Link
											href={route("logout")}
											method="post"
											className="font-bold text-md md:text-xl hover:underline dark:text-white">
											Sign Out
										</Link>
									</>
								) : (
									<>
										<Link
											href="/login"
											className="font-bold text-md md:text-xl hover:underline dark:text-white">
											Sign In
										</Link>
										<span className="text-dark">|</span>
										<Link
											href="/register"
											className="font-bold text-md md:text-xl hover:underline dark:text-white">
											Sign Up
										</Link>
									</>
								)}
							</div>

							{/* Social Media Icons */}
							{/*<div className="hidden sm:flex space-x-4">
								<h1 className="text-gray-400 font-arialRounded text-xl">Follow us:</h1>
								{socialLinks.map((social, index) => (
									<a
										key={index}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-white hover:text-gray-400">
										<img
											src={social.icon}
											alt={social.alt}
											className="w-auto h-7"
										/>
									</a>
								))}
							</div>*/}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

import { Link, usePage } from "@inertiajs/react";
import {
	HomeIcon,
	PencilSquareIcon,
	CheckBadgeIcon,
	AcademicCapIcon,
	ClipboardDocumentIcon,
	FolderIcon,
	ChartPieIcon,
	PresentationChartBarIcon,
	ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/solid";

import logo from "/public/image/Hero/LOGO.png";
import smallLogo from "/public/image/Hero/LOGO 1.png";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
	const { url } = usePage();
	const sidebarItems = [
		{ name: "Dashboard", icon: HomeIcon, href: "dashboard" },
		{ name: "Registration", icon: PencilSquareIcon, href: "registration" },
		{ name: "Certifications", icon: CheckBadgeIcon, href: "certifications" },
		{ name: "Course/s", icon: AcademicCapIcon, href: "course" },
		{ name: "Lesson/s", icon: ClipboardDocumentIcon, href: "lesson" },
		{ name: "Document/s", icon: ClipboardDocumentIcon, href: "documents" },
		{ name: "My Folder", icon: FolderIcon, href: "folder" },
		{ name: "Chart/s", icon: ChartPieIcon, href: "charts" },
		{ name: "Reports", icon: PresentationChartBarIcon, href: "reports" },
		{ name: "Archive", icon: ArchiveBoxArrowDownIcon, href: "archive" },
	];

	return (
		<div
			className={`transition-all duration-300 ${
				isSidebarOpen ? "w-64" : "w-20"
			} bg-white dark:bg-gray-700 shadow-2xl border-1 border-r-2 border-gray-200`}>
			<div className="flex justify-between items-center mb-6">
				{/* Sidebar Toggle */}
				<button
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className="text-gray-400 hover:text-white px-4 py-4 border-b-4 border-oceanBlue">
					<img
						src={isSidebarOpen ? logo : smallLogo}
						alt={isSidebarOpen ? "Full Logo" : "Small Logo"}
						className={isSidebarOpen ? "max-h-20 w-auto block" : "h-12 w-auto block"}
					/>
				</button>
			</div>

			{/* Navigation Links */}
			<nav className="space-y-2">
				{sidebarItems.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className={`flex items-center text-oceanBlue hover:bg-oceanBlue hover:text-white p-4 transition-all duration-300 ${
							isSidebarOpen ? "justify-start" : "justify-center"
						} ${url.includes(item.href) ? "bg-oceanBlue text-white" : ""}`}>
						{" "}
						<item.icon className="h-6 w-6" />
						{isSidebarOpen && <span className="ml-4">{item.name}</span>}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default Sidebar;

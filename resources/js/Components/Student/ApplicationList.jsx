import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const ApplicationList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [applications, setApplications] = useState([]);
	const [availableApplications, setAvailableApplications] = useState([]);
	const [selectedApplications, setSelectedApplications] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [notification, setNotification] = useState({ message: "", type: "" });

	useEffect(() => {
		const fetchUserApplications = async () => {
			try {
				const response = await axios.get("/user-applications");
				setApplications(response.data);
				setSelectedApplications(response.data.map((app) => app.application.id));
			} catch (err) {
				setError("Failed to fetch user applications.");
			} finally {
				setLoading(false);
			}
		};

		const fetchAvailableApplications = async () => {
			try {
				const response = await axios.get("/applications");
				setAvailableApplications(response.data);
			} catch (err) {
				setError("Failed to fetch available applications.");
			}
		};

		fetchUserApplications();
		fetchAvailableApplications();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		// Reset selected applications if you want to clear selection
		// setSelectedApplications([]); // Uncomment if needed
	};

	const toggleApplicationSelection = (appId) => {
		setSelectedApplications((prevSelected) =>
			prevSelected.includes(appId)
				? prevSelected.filter((id) => id !== appId)
				: [...prevSelected, appId]
		);
	};

	const handleApplicationSubmit = async (e) => {
		e.preventDefault();

		try {
			const payload = {
				application_ids: selectedApplications.length > 0 ? selectedApplications : [],
			};

			await axios.post("/user-applications", payload);

			if (selectedApplications.length === 0) {
				setNotification({
					message: "No applications selected. Cleared existing applications!",
					type: "info",
				});
			} else {
				setNotification({ message: "Applications updated successfully!", type: "success" });
			}

			// Re-fetch user applications to update the state
			const response = await axios.get("/user-applications");
			setApplications(response.data);
			closeModal();
		} catch (err) {
			setNotification({ message: "Failed to update applications.", type: "error" });
			console.error(err);
		} finally {
			setTimeout(() => setNotification({ message: "", type: "" }), 3000);
		}
	};

	return (
		<div className="bg-white p-6 shadow-lg rounded-lg w-full">
			{notification.message && (
				<div
					className={`p-4 mb-4 rounded ${
						notification.type === "success"
							? "bg-green-200 text-green-800"
							: "bg-red-200 text-red-800"
					}`}>
					{notification.message}
				</div>
			)}

			<div className="flex flex-row justify-between items-center">
				<h3 className="text-2xl font-semibold text-oceanBlue">Application/s</h3>
				<button
					onClick={openModal}
					className="focus:outline-none hover:scale-110 transition-all">
					<PencilSquareIcon className="w-6 h-6 text-oceanBlue mb-3" />
				</button>
			</div>

			<div className="flex gap-3 flex-wrap py-4 px-2">
				{applications.length > 0 ? (
					applications.map((app) => (
						<a
							href={app.application.url}
							target="_blank"
							rel="noopener noreferrer"
							key={app.id}
							className="flex items-center gap-2">
							{app.application.icon_path && (
								<img
									src={app.application.icon_path}
									alt={app.application.name}
									className="w-12 h-12 hover:scale-110 transition-all"
								/>
							)}
						</a>
					))
				) : (
					<p className="text-gray-500 p-2">No applications found, please add your applications</p>
				)}
			</div>

			<Modal
				show={isModalOpen}
				onClose={closeModal}
				maxWidth="3xl">
				<div className="px-1">
					<div className="p-4 sm:p-6 bg-white dark:bg-gray-800 sm:rounded-lg">
						<div className="flex py-2 justify-start mb-2">
							<h1 className="text-lg font-semibold">Select Applications/Software</h1>
						</div>
						<form onSubmit={handleApplicationSubmit}>
							<div className="flex gap-3 flex-wrap">
								{availableApplications.map((app) => (
									<div
										key={app.id}
										className={`flex flex-col items-center cursor-pointer border rounded-lg p-2 ${
											selectedApplications.includes(app.id) ? "border-oceanBlue" : "border-gray-300"
										}`}
										onClick={() => toggleApplicationSelection(app.id)}>
										<img
											src={app.icon_path}
											alt={app.name}
											className="w-auto h-10 mb-2"
										/>
										<span className="text-sm">{app.name}</span>
										{selectedApplications.includes(app.id) && (
											<span className="text-xs text-oceanBlue mt-1">Selected</span>
										)}
									</div>
								))}
							</div>
							<div className="flex justify-end mt-4">
								<button
									type="button"
									className="text-gray-500 mr-3"
									onClick={closeModal}>
									Cancel
								</button>
								<button
									type="submit"
									className="px-4 py-2 bg-oceanBlue text-white rounded-lg shadow hover:bg-blue-600">
									Save Applications
								</button>
							</div>
						</form>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ApplicationList;

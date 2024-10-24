import { useEffect, useState } from "react";
import { PencilSquareIcon, TrashIcon, XCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import Modal from "@/Components/Modal";
import axios from "axios";

const SocialAccounts = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [socialAccounts, setSocialAccounts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentAccount, setCurrentAccount] = useState({
		id: "",
		platform_id: "",
		account_url: "",
	});
	const [isEditing, setIsEditing] = useState(false);
	const [platforms, setPlatforms] = useState([]);
	const [showEditOptions, setShowEditOptions] = useState(false);
	const [notification, setNotification] = useState({ message: "", type: "" });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [accountsResponse, platformsResponse] = await Promise.all([
					axios.get("/social-accounts"),
					axios.get("/social-media-platforms"),
				]);
				setSocialAccounts(accountsResponse.data);
				setPlatforms(platformsResponse.data);
			} catch (err) {
				setError("Failed to fetch data");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	const openModal = (account = null) => {
		if (account) {
			setCurrentAccount(account);
			setIsEditing(true);
		} else {
			setCurrentAccount({ id: "", platform_id: "", account_url: "" });
			setIsEditing(false);
		}
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const toggleEditOn = () => {
		setShowEditOptions(true);
	};

	const toggleEditOff = () => {
		setShowEditOptions(false);
	};

	const handleAccountChange = (event) => {
		const { name, value } = event.target;
		setCurrentAccount((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			let response;
			if (isEditing) {
				response = await axios.put(`/social-accounts/${currentAccount.id}`, currentAccount);
				setSocialAccounts((prev) =>
					prev.map((account) =>
						account.id === currentAccount.id ? response.data.socialAccount : account
					)
				);
				setNotification({ message: "Social Account updated successfully!", type: "success" });
			} else {
				response = await axios.post("/social-accounts", currentAccount);
				setSocialAccounts((prev) => [...prev, response.data.socialAccount]);
				setNotification({ message: "Social Account added successfully!", type: "success" });
			}
			closeModal();
		} catch (err) {
			if (err.response && err.response.status === 422) {
				const errorMessage = err.response.data.message;
				setNotification({ message: errorMessage, type: "error" });
				closeModal();
			} else {
				console.error("Error submitting form:", err);
				setNotification({ message: "Failed to save Social Account.", type: "error" });
				closeModal();
			}
		} finally {
			setTimeout(() => setNotification({ message: "", type: "" }), 3000);
		}
	};

	const handleDeleteClick = async (accountId) => {
		try {
			await axios.delete(`/social-accounts/${accountId}`);
			setSocialAccounts((prev) => prev.filter((account) => account.id !== accountId));
			setNotification({ message: "Social Account deleted successfully!", type: "error" });
		} catch (err) {
			console.error("Error deleting account:", err);
			setNotification({ message: "Failed to delete Social Account.", type: "error" });
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
				<h3 className="text-2xl font-semibold text-oceanBlue">Other Social Accounts</h3>
				{/* <button
					onClick={() => openModal()}
					className="hover:scale-90 transition-all">
					<PlusIcon className="w-6 h-6 text-oceanBlue mb-3" />
				</button> */}
				{showEditOptions ? (
					<div className="flex flex-row gap-2">
						<button
							onClick={() => openModal()}
							className="hover:scale-90 transition-all">
							<PlusIcon className="w-6 h-6 text-oceanBlue mb-3" />
						</button>
						<button
							onClick={toggleEditOff}
							className="hover:scale-90 transition-all">
							<XCircleIcon className="w-6 h-6 text-oceanBlue mb-3" />
						</button>
					</div>
				) : (
					<button
						onClick={toggleEditOn}
						className="hover:scale-90 transition-all">
						<PencilSquareIcon className="w-6 h-6 text-oceanBlue mb-3" />
					</button>
				)}
			</div>
			<div className="flex flex-row gap-4 mt-4">
				{socialAccounts.map((account) => (
					<div
						key={account.id}
						className="flex flex-col justify-between gap-1 items-center">
						<a
							href={account.account_url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:scale-90 transition-all">
							{account.platform ? (
								<img
									src={account.platform.icon_path}
									alt={`${account.platform.name} icon`}
									className="w-12 h-12"
								/>
							) : (
								<div className="w-12 h-12 bg-gray-300 flex items-center justify-center">
									<span>No Icon</span>
								</div>
							)}
						</a>
						{showEditOptions && (
							<div className="flex gap-2">
								<button
									className="flex items-center text-blue-500"
									onClick={() => openModal(account)}>
									<PencilSquareIcon className="w-5 h-5 hover:scale-90 transition-all" />
								</button>
								<button
									className="flex items-center text-red-500"
									onClick={() => handleDeleteClick(account.id)}>
									<TrashIcon className="w-5 h-5 hover:scale-90 transition-all" />
								</button>
							</div>
						)}
					</div>
				))}
			</div>
			<Modal
				show={isModalOpen}
				onClose={closeModal}
				maxWidth="3xl">
				<div className="px-1">
					<div className="p-4 sm:p-6 bg-white dark:bg-gray-800 sm:rounded-lg">
						<div className="flex py-2 justify-start mb-2">
							<h1 className="text-lg font-semibold">Add your Social Accounts</h1>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label className="block text-oceanBlue mb-2">Platform</label>
								<select
									name="platform_id"
									value={currentAccount.platform_id}
									onChange={handleAccountChange}
									required
									className="border rounded w-full px-3 py-2">
									<option value="">Select a platform</option>
									{platforms.map((platform) => (
										<option
											key={platform.id}
											value={platform.id}>
											{platform.name}
										</option>
									))}
								</select>
							</div>
							<div className="mb-4">
								<label className="block text-oceanBlue mb-2">Account URL</label>
								<input
									type="url"
									name="account_url"
									value={currentAccount.account_url}
									onChange={handleAccountChange}
									required
									className="border rounded w-full px-3 py-2"
								/>
							</div>
							<button
								type="submit"
								className="bg-oceanBlue text-white px-4 py-2 rounded">
								{isEditing ? "Update" : "Add"} Social Account
							</button>
						</form>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default SocialAccounts;

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Modal from "@/Components/Modal";

const GoalsSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [goals, setGoals] = useState([]);
	const [currentGoal, setCurrentGoal] = useState({ id: null, goal: "" });
	const [isEditing, setIsEditing] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [notification, setNotification] = useState({ message: "", type: "" });

	useEffect(() => {
		const fetchGoals = async () => {
			try {
				const response = await axios.get("/goals");
				setGoals(response.data);
			} catch (error) {
				console.error("Error fetching goals:", error);
				setError("Failed to fetch goals.");
			} finally {
				setLoading(false);
			}
		};
		fetchGoals();
	}, []);

	const openModal = () => {
		setCurrentGoal({ id: null, goal: "" });
		setIsEditing(false);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleGoalChange = (e) => {
		setCurrentGoal({ ...currentGoal, goal: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (isEditing) {
				// Update existing goal
				const response = await axios.put(`/goals/${currentGoal.id}`, {
					goal: currentGoal.goal,
				});
				setGoals(goals.map((goal) => (goal.id === response.data.id ? response.data : goal)));
				setNotification({ message: "Goal updated successfully!", type: "success" });
			} else {
				// Create new goal
				const response = await axios.post("/goals", {
					goal: currentGoal.goal,
				});
				setGoals([...goals, response.data]);
				setNotification({ message: "Goal added successfully!", type: "success" });
			}
		} catch (error) {
			console.error("Error saving goal:", error);
			setNotification({ message: "Failed to save goal.", type: "error" });
		} finally {
			setCurrentGoal({ id: null, goal: "" });
			setTimeout(() => setNotification({ message: "", type: "" }), 3000);
			closeModal();
		}
	};

	const handleEdit = (goal) => {
		setCurrentGoal(goal);
		setIsEditing(true);
		openModal();
	};

	const handleDelete = async (goalId) => {
		try {
			await axios.delete(`/goals/${goalId}`);
			setGoals(goals.filter((goal) => goal.id !== goalId));
			setNotification({ message: "Goal deleted successfully!", type: "error" });
		} catch (error) {
			console.error("Error deleting goal:", error);
			setNotification({ message: "Failed to delete goal.", type: "error" });
		} finally {
			setTimeout(() => setNotification({ message: "", type: "" }), 3000);
			closeModal();
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

			<div className="flex flex-row justify-between items-center align-middle">
				<h3 className="text-xl font-bold text-oceanBlue mb-3">Goals</h3>
				<button
					onClick={openModal}
					className="focus:outline-none">
					<PencilSquareIcon className="w-6 h-6 text-oceanBlue mb-3" />
				</button>
			</div>

			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p className="text-red-500">{error}</p>
			) : (
				<div className="px-4">
					{goals.length === 0 ? (
						<p className="text-gray-500">No goals found, please add your goals</p>
					) : (
						<ul className="list-disc">
							{goals.map((goal) => (
								<li
									key={goal.id}
									className="text-oceanBlue font-semibold">
									{goal.goal}
								</li>
							))}
						</ul>
					)}
				</div>
			)}

			<Modal
				show={isModalOpen}
				onClose={closeModal}
				maxWidth="3xl">
				<div className="px-1">
					<div className="p-4 sm:p-6 bg-white dark:bg-gray-800 sm:rounded-lg">
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label className="block text-oceanBlue mb-2">Goal</label>
								<input
									type="text"
									value={currentGoal.goal}
									onChange={handleGoalChange}
									className="border rounded w-full px-3 py-2"
									required
								/>
							</div>
							<div className="flex justify-end">
								<button
									type="button"
									className="text-gray-500 mr-4"
									onClick={closeModal}>
									Cancel
								</button>
								<button
									type="submit"
									className="bg-oceanBlue text-white px-4 py-2 rounded">
									{isEditing ? "Update Goal" : "Add Goal"}
								</button>
							</div>
						</form>
						<h4 className="text-lg font-bold text-oceanBlue mt-6">Existing Goals</h4>
						<ul className="list-disc mt-2">
							{goals.map((goal) => (
								<li
									key={goal.id}
									className="flex justify-between items-center text-oceanBlue">
									<span>- {goal.goal}</span>
									<div>
										{/* <button
											className="text-blue-500 hover:underline"
											onClick={() => handleEdit(goal)}>
											Edit
										</button> */}
										<button
											className="text-red-500 hover:underline ml-2"
											onClick={() => handleDelete(goal.id)}>
											Delete
										</button>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default GoalsSection;

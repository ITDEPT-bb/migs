import React from "react";

export default function Loader({ loading }) {
	if (!loading) return null;
	return (
		<div className="flex justify-center items-center w-full h-full">
			<div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-gray-600"></div>
		</div>
	);
}

import { useState } from "react";

const AccountNumber = ({ accountNumber }) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(accountNumber);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<h2 className="font-light text-base sm:text-lg lg:text-xl text-black dark:text-gray-200 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 justify-center sm:justify-start">
			<span className="text-md sm:text-sm">Student Account Number:</span>
			<span className="bg-oceanBlue flex items-center gap-1 lg:gap-2 font-bold text-white px-1 lg:px-4 py-1 lg:py-2 rounded-md">
				{accountNumber}
				<button
					onClick={copyToClipboard}
					className="bg-white font-light dark:bg-gray-600 text-oceanBlue dark:text-gray-300 px-2 rounded text-sm sm:text-base hover:text-white hover:bg-gray-400 dark:hover:bg-gray-700 transition duration-150">
					{copied ? "Copied!" : "Copy"}
				</button>
			</span>
		</h2>
	);
};

export default AccountNumber;

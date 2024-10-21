import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Adjust the import according to your setup

export default function Modal({
	children,
	show = false,
	maxWidth = "2xl",
	closeable = true,
	onClose = () => {},
}) {
	const close = () => {
		if (closeable) {
			onClose();
		}
	};

	const maxWidthClass = {
		sm: "sm:max-w-sm",
		md: "sm:max-w-md",
		lg: "sm:max-w-lg",
		xl: "sm:max-w-xl",
		"2xl": "sm:max-w-2xl",
		"3xl": "sm:max-w-3xl",
		"4xl": "sm:max-w-4xl",
		"5xl": "sm:max-w-5xl",
		"6xl": "sm:max-w-6xl",
		"7xl": "sm:max-w-7xl",
	}[maxWidth];

	return (
		<Transition
			show={show}
			leave="duration-200">
			<Dialog
				as="div"
				id="modal"
				className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all"
				onClose={close}>
				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75" />
				</TransitionChild>

				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					enterTo="opacity-100 translate-y-0 sm:scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 translate-y-0 sm:scale-100"
					leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
					<DialogPanel
						className={`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass} max-h-screen overflow-y-auto`}>
						{/* Close Button */}
						<div className="px-6 pt-6 flex justify-end text-gray-900 dark:text-gray-200">
							<button
								onClick={close}
								className="focus:outline-none">
								<XMarkIcon className="w-6 h-6" />
							</button>
						</div>

						{children}
					</DialogPanel>
				</TransitionChild>
			</Dialog>
		</Transition>
	);
}

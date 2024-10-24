import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateProfileInformation({
	mustVerifyEmail,
	status,
	className = "",
	onSuccess,
}) {
	const user = usePage().props.auth.user;

	const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
		name: user.name,
		middlename: user.middlename,
		surname: user.surname,
		username: user.username,
		email: user.email,
		quote: user.quote,
		bio: user.bio,
	});

	const submit = (e) => {
		e.preventDefault();

		// patch(route("profile.update"));
		patch(route("profile.update"), {
			onSuccess: () => {
				setTimeout(() => {
					if (onSuccess) {
						onSuccess();
					}
				}, 1000);
			},
		});
	};

	return (
		<section className={className}>
			<header>
				<h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
					Profile Information
				</h2>

				<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
					Update your account's profile information. Note that field with gray background cannot be
					edit, and you need to make a request ticket for them to be updated.
				</p>
			</header>

			<form
				onSubmit={submit}
				className="mt-6 space-y-6">
				<div className="flex flex-row gap-4">
					<div className="w-full">
						<InputLabel
							htmlFor="name"
							value="Name"
						/>

						<TextInput
							id="name"
							className="mt-1 block w-full bg-gray-300"
							value={data.name}
							onChange={(e) => setData("name", e.target.value)}
							required
							disabled
							autoComplete="name"
						/>

						<InputError
							className="mt-2"
							message={errors.name}
						/>
					</div>

					<div className="w-full">
						<InputLabel
							htmlFor="middlename"
							value="Middlename"
						/>

						<TextInput
							id="middlename"
							className="mt-1 block w-full"
							value={data.middlename}
							onChange={(e) => setData("middlename", e.target.value)}
							autoComplete="middlename"
						/>

						<InputError
							className="mt-2"
							message={errors.middlename}
						/>
					</div>

					<div className="w-full">
						<InputLabel
							htmlFor="surname"
							value="Surname"
						/>

						<TextInput
							id="surname"
							className="mt-1 block w-full bg-gray-300"
							value={data.surname}
							onChange={(e) => setData("surname", e.target.value)}
							required
							disabled
							autoComplete="surname"
						/>

						<InputError
							className="mt-2"
							message={errors.surname}
						/>
					</div>
				</div>

				<div>
					<InputLabel
						htmlFor="email"
						value="Email"
					/>

					<TextInput
						id="email"
						type="email"
						className="mt-1 block w-full bg-gray-300"
						value={data.email}
						onChange={(e) => setData("email", e.target.value)}
						required
						disabled
						autoComplete="username"
					/>

					<InputError
						className="mt-2"
						message={errors.email}
					/>
				</div>

				<div className="w-full">
					<InputLabel
						htmlFor="username"
						value="Username"
					/>

					<TextInput
						id="username"
						className="mt-1 block w-full"
						value={data.username}
						onChange={(e) => setData("username", e.target.value)}
						required
						isFocused
						autoComplete="username"
					/>

					<InputError
						className="mt-2"
						message={errors.username}
					/>
				</div>

				<div className="w-full">
					<InputLabel
						htmlFor="quote"
						value="Your Quote"
					/>

					<TextInput
						id="quote"
						className="mt-1 block w-full"
						value={data.quote}
						onChange={(e) => setData("quote", e.target.value)}
						autoComplete="quote"
					/>

					<InputError
						className="mt-2"
						message={errors.quote}
					/>
				</div>

				<div className="w-full">
					<InputLabel
						htmlFor="bio"
						value="Your Bio"
					/>

					<textarea
						id="bio"
						className="mt-1 block w-full h-32 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
						value={data.bio}
						onChange={(e) => setData("bio", e.target.value)}
						autoComplete="bio"
					/>

					<InputError
						className="mt-2"
						message={errors.bio}
					/>
				</div>

				{mustVerifyEmail && user.email_verified_at === null && (
					<div>
						<p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
							Your email address is unverified.
							<Link
								href={route("verification.send")}
								method="post"
								as="button"
								className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
								Click here to re-send the verification email.
							</Link>
						</p>

						{status === "verification-link-sent" && (
							<div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
								A new verification link has been sent to your email address.
							</div>
						)}
					</div>
				)}

				<div className="flex items-center gap-4">
					<PrimaryButton disabled={processing}>Save</PrimaryButton>

					<Transition
						show={recentlySuccessful}
						enter="transition ease-in-out"
						enterFrom="opacity-0"
						leave="transition ease-in-out"
						leaveTo="opacity-0">
						<p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
					</Transition>
				</div>
			</form>
		</section>
	);
}

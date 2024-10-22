import { useState, useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Image imports
import signUpVector from "/public/image/Auth/signUpVector.png";
import clouds from "/public/image/Auth/clouds.png";
import logo from "/public/image/Hero/LOGO.png";

export default function Register() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const [step, setStep] = useState(1);

	const { data, setData, post, processing, errors, reset } = useForm({
		role: "",
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	});

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	const submit = (e) => {
		e.preventDefault();

		if (step === 4) {
			post(route("register"), {
				onFinish: () => reset("password", "password_confirmation"),
			});
		} else {
			nextStep();
		}
	};

	return (
		<>
			<Head title="Register" />

			<div className="lg:max-w-full lg:h-screen flex justify-center items-center overflow-hidden">
				{/* Left Side: Illustration and Text */}
				<div className="hidden lg:flex flex-col w-1/2 p-24 bg-primary items-center justify-center">
					<img
						src={logo}
						alt="Logo"
						className="h-12 w-auto hidden mb-6 md:block"
					/>
					<img
						src={signUpVector}
						alt="Creative Design"
						className="w-10/12 mb-6"
					/>
					<h1 className="text-2xl font-semibold text-white text-center">
						Join Our Creative Community
					</h1>
					<p className="text-md text-center text-white mt-4">
						Become part of a vibrant community of creators. Learn, grow, and share your ideas with
						the world!
					</p>
					<p className="mt-8 text-center text-white font-semibold">
						• We Learn • We Acquire • We Understand • We Master
					</p>
				</div>

				{/* Right Side: Registration Form */}
				<div
					className="w-full lg:w-1/2 p-8"
					style={{
						backgroundImage: `url(${clouds})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}>
					<h2 className="text-4xl font-bold text-center text-primary mb-2">REGISTER</h2>
					<h2 className="text-lg font-normal text-center mb-6 px-20">
						Create your account to access exclusive content and embark on your creative journey.
					</h2>

					<form
						onSubmit={submit}
						className="px-16">
						{step === 1 && (
							<>
								<div>
									<h2 className="text-lg font-semibold">Step 1: Choose Role</h2>
									<InputLabel value="Are you an Instructor or Student?" />
									<div className="mt-1">
										<label className="inline-flex items-center">
											<input
												type="radio"
												value="instructor"
												checked={data.user_type === "instructor"}
												onChange={(e) => setData("user_type", e.target.value)}
												className="form-radio"
											/>
											<span className="ml-2">Instructor</span>
										</label>
										<label className="inline-flex items-center ml-6">
											<input
												type="radio"
												value="student"
												checked={data.user_type === "student"}
												onChange={(e) => setData("user_type", e.target.value)}
												className="form-radio"
											/>
											<span className="ml-2">Student</span>
										</label>
									</div>
									<InputError
										message={errors.user_type}
										className="mt-2"
									/>
								</div>

								<div className="mt-4">
									<PrimaryButton
										className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
										disabled={processing}>
										Next Step
									</PrimaryButton>
								</div>
							</>
						)}

						{step === 2 && (
							<>
								<div>
									<TextInput
										id="name"
										name="name"
										value={data.name}
										className="mt-1 block w-full"
										autoComplete="name"
										placeholder="First Name"
										isFocused={true}
										onChange={(e) => setData("name", e.target.value)}
										required
									/>
									<InputError
										message={errors.name}
										className="mt-2"
									/>
								</div>

								<div className="mt-4">
									<TextInput
										id="middelename"
										name="middelename"
										value={data.middelename}
										className="mt-1 block w-full"
										autoComplete="middelename"
										placeholder="Middle Name (Optional)"
										onChange={(e) => setData("middelename", e.target.value)}
										required
									/>
									<InputError
										message={errors.middelename}
										className="mt-2"
									/>
								</div>

								<div className="mt-4">
									<TextInput
										id="surname"
										name="surname"
										value={data.surname}
										className="mt-1 block w-full"
										autoComplete="surname"
										placeholder="Last Name"
										onChange={(e) => setData("surname", e.target.value)}
										required
									/>
									<InputError
										message={errors.surname}
										className="mt-2"
									/>
								</div>

								<div className="flex justify-between gap-4 mt-4">
									<PrimaryButton
										className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
										onClick={prevStep}>
										Previous Step
									</PrimaryButton>
									<PrimaryButton
										className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
										disabled={processing}>
										Next Step
									</PrimaryButton>
								</div>
							</>
						)}

						{step === 3 && (
							<>
								<div className="flex justify-between gap-4 mt-4">
									<PrimaryButton
										className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
										onClick={prevStep}>
										Previous Step
									</PrimaryButton>
									<PrimaryButton
										className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
										disabled={processing}>
										Register
									</PrimaryButton>
								</div>
							</>
						)}

						{step === 4 && (
							<>
								<div>
									<TextInput
										id="email"
										type="email"
										name="email"
										value={data.email}
										className="mt-1 block w-full"
										autoComplete="username"
										placeholder="Email"
										onChange={(e) => setData("email", e.target.value)}
										required
									/>
									<InputError
										message={errors.email}
										className="mt-2"
									/>
								</div>

								<div className="mt-4">
									<InputLabel
										htmlFor="password"
										value="Password"
										className="text-gray-700"
									/>
									<TextInput
										id="password"
										type="password"
										name="password"
										value={data.password}
										className="mt-1 block w-full"
										autoComplete="new-password"
										onChange={(e) => setData("password", e.target.value)}
										required
									/>
									<InputError
										message={errors.password}
										className="mt-2"
									/>
								</div>

								<div className="mt-4">
									<InputLabel
										htmlFor="password_confirmation"
										value="Confirm Password"
										className="text-gray-700"
									/>
									<TextInput
										id="password_confirmation"
										type="password"
										name="password_confirmation"
										value={data.password_confirmation}
										className="mt-1 block w-full"
										autoComplete="new-password"
										onChange={(e) => setData("password_confirmation", e.target.value)}
										required
									/>
									<InputError
										message={errors.password_confirmation}
										className="mt-2"
									/>
								</div>

								<div className="flex justify-between gap-4 mt-4">
									<PrimaryButton
										className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
										onClick={prevStep}>
										Previous Step
									</PrimaryButton>
									<PrimaryButton
										className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
										disabled={processing}>
										Register
									</PrimaryButton>
								</div>
							</>
						)}
					</form>

					<div className="flex flex-row gap-1 justify-center items-center mt-4 text-center">
						<p>Already registered?</p>
						<Link
							href={route("login")}
							className="text-primary underline hover:text-skyWater">
							Log in
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

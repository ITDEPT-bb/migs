import { useState, useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    ArrowRightCircleIcon,
    ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";

// Image imports
import signUpVector from "/public/image/Auth/signUpVector.png";
import clouds from "/public/image/Auth/clouds.png";
import cloud1 from "/public/image/Auth/cloud1.png";
import cloud2 from "/public/image/Auth/cloud2.png";
import cloud3 from "/public/image/Auth/cloud3.png";
import logo from "/public/image/Hero/LOGO.png";

export default function Register() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [step, setStep] = useState(1);
    const [validationError, setValidationError] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        role: "",
        name: "",
        middlename: "",
        surname: "",
        gender: "",
        country: "",
        city: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const submit = (e) => {
        e.preventDefault();

        if (step === 5) {
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

            <div
                className="lg:max-w-full lg:h-screen flex  justify-center items-center overflow-hidden"
                data-aos="fade-right"
            >
                {/* Left Side: Illustration and Text */}
                <div className="hidden lg:flex flex-col w-1/2 lg:min-h-screen p-24 bg-primary items-center justify-center">
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
                        Become part of a vibrant community of creators. Learn,
                        grow, and share your ideas with the world!
                    </p>
                    <p className="mt-8 text-center text-white font-semibold">
                        • We Learn • We Acquire • We Understand • We Master
                    </p>
                </div>

                {/* Right Side: Registration Form */}
                <div
                    className="w-full lg:w-1/2 p-3 lg:p-8 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:items-center bg-gray-200"
                    style={{
                        // backgroundImage: `url(${clouds})`,
                        // backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* <div>
                        <img
                            src={cloud1}
                            className="h-screen absolute right-0 z-30 animate-cloud1"
                            alt=""
                        />
                        <img
                            src={cloud2}
                            className="h-screen absolute right-0 z-20 animate-cloud2"
                            alt=""
                        />
                        <img
                            src={cloud3}
                            className="h-[106vh] absolute right-0 z-10 animate-cloud3"
                            alt=""
                        />

                        <div className="bg-[#F5F6FA] absolute top-0 h-screen w-[10px] right-0"></div>
                    </div> */}
                    <h2 className="text-4xl font-bold text-center text-primary mb-2">
                        REGISTER
                    </h2>
                    <h2 className="text-md font-normal text-center mb-6 px-20 hidden lg:block">
                        Now to access expert-led courses, hands-on projects, and
                        a vibrant community of aspiring graphic artists. Your
                        creative future starts here.
                    </h2>

                    <form
                        onSubmit={submit}
                        className="px-3 lg:px-16 w-full flex flex-col items-center lg:flex-none"
                    >
                        {step === 1 && (
                            <>
                                <div>
                                    <h2 className="text-lg font-bold text-center">
                                        ACCOUNT TYPE?
                                    </h2>
                                    {/* <InputLabel value="Are you an Instructor or Student?" /> */}

                                    <div className="mt-4 flex flex-col space-y-3">
                                        {/* Instructor Pill */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setData("role", "instructor")
                                            }
                                            className={`px-4 py-2 rounded-full border ${
                                                data.role === "instructor"
                                                    ? "bg-primary text-white"
                                                    : "bg-gray-300 text-gray-700"
                                            }`}
                                        >
                                            Instructor
                                        </button>

                                        {/* Student Pill */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setData("role", "student")
                                            }
                                            className={`px-4 py-2 rounded-full border ${
                                                data.role === "student"
                                                    ? "bg-primary text-white"
                                                    : "bg-gray-300 text-gray-700"
                                            }`}
                                        >
                                            Student
                                        </button>
                                    </div>

                                    <div className="p-0 lg:p-4 my-2">
                                        <h3 className="text-center text-sm lg:text-md">
                                            Please be informed that choosing
                                            (INSTRUCTOR) as an ACCOUNT TYPE
                                            requires confirmation from ADMIN
                                        </h3>
                                    </div>

                                    {/* Validation Error */}
                                    {errors.role ? (
                                        <InputError
                                            message={errors.role}
                                            className="mt-2"
                                        />
                                    ) : null}
                                </div>

                                <div className="mt-4">
                                    <PrimaryButton
                                        onClick={nextStep}
                                        className="w-full flex gap-2 text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                        disabled={!data.role || processing}
                                    >
                                        Next Step
                                        <ArrowRightCircleIcon className="h-6 w-6" />
                                    </PrimaryButton>
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <div className="w-full">
                                <div>
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        autoComplete="name"
                                        placeholder="First Name"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <TextInput
                                        id="middlename"
                                        name="middlename"
                                        value={data.middlename}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        autoComplete="middlename"
                                        placeholder="Middle Name (Optional)"
                                        onChange={(e) =>
                                            setData(
                                                "middlename",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.middlename}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <TextInput
                                        id="surname"
                                        name="surname"
                                        value={data.surname}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        autoComplete="surname"
                                        placeholder="Last Name"
                                        onChange={(e) =>
                                            setData("surname", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.surname}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex justify-between gap-4 mt-4">
                                    <PrimaryButton
                                        className="w-full text-center flex gap-1 justify-center items-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                        onClick={prevStep}
                                    >
                                        <ArrowLeftCircleIcon className="h-5 w-5" />{" "}
                                        Previous Step
                                    </PrimaryButton>
                                    <PrimaryButton
                                        className="w-full text-center flex gap-1 justify-center items-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                        disabled={processing}
                                    >
                                        Next Step{" "}
                                        <ArrowRightCircleIcon className="h-5 w-5" />
                                    </PrimaryButton>
                                </div>
                                <div className="flex justify-center px-3 pt-4">
                                    <p className="text-gray-400 text-xs">1/4</p>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="w-full">
                                <div>
                                    <TextInput
                                        id="birthday"
                                        name="birthday"
                                        type="date"
                                        value={data.birthday}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        onChange={(e) =>
                                            setData("birthday", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.birthday}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={data.gender}
                                        onChange={(e) =>
                                            setData("gender", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-none shadow-sm border-0 border-l-8 border-primary focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
                                        required
                                    >
                                        <option disabled value="">
                                            Select One
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <InputError
                                        message={errors.gender}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <TextInput
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={data.phone}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        autoComplete="tel"
                                        placeholder="Phone/Telephone No."
                                        required
                                        onChange={(e) => {
                                            const value =
                                                e.target.value.replace(
                                                    /[^0-9]/g,
                                                    ""
                                                );
                                            setData("phone", value);
                                        }}
                                    />
                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex justify-between gap-4 mt-4">
                                    <PrimaryButton
                                        className="w-full text-center flex gap-1 justify-center items-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                        onClick={prevStep}
                                    >
                                        <ArrowLeftCircleIcon className="h-5 w-5" />{" "}
                                        Previous Step
                                    </PrimaryButton>
                                    <PrimaryButton
                                        className="w-full text-center flex gap-1 justify-center items-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                        disabled={processing}
                                    >
                                        Next Step{" "}
                                        <ArrowRightCircleIcon className="h-5 w-5" />
                                    </PrimaryButton>
                                </div>
                                <div className="flex justify-center px-3 pt-4">
                                    <p className="text-gray-400 text-xs">2/4</p>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="w-full">
                                <div>
                                    <TextInput
                                        id="country"
                                        name="country"
                                        value={data.country}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        placeholder="Country"
                                        onChange={(e) =>
                                            setData("country", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.country}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <TextInput
                                        id="city"
                                        name="city"
                                        value={data.city}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        placeholder="City"
                                        onChange={(e) =>
                                            setData("city", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.city}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex justify-between gap-4 mt-4">
                                    <PrimaryButton
                                        className="w-full text-center flex gap-1 justify-center items-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                        onClick={prevStep}
                                    >
                                        <ArrowLeftCircleIcon className="h-5 w-5" />{" "}
                                        Previous Step
                                    </PrimaryButton>
                                    <PrimaryButton
                                        className="w-full text-center flex gap-1 justify-center items-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                        disabled={processing}
                                    >
                                        Next Step{" "}
                                        <ArrowRightCircleIcon className="h-5 w-5" />
                                    </PrimaryButton>
                                </div>
                                <div className="flex justify-center px-3 pt-4">
                                    <p className="text-gray-400 text-xs">3/4</p>
                                </div>
                            </div>
                        )}

                        {step === 5 && (
                            <div className="w-full">
                                <div>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        autoComplete="username"
                                        placeholder="Email"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        placeholder="Password"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                        autoComplete="new-password"
                                        placeholder="Re-type Password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center">
                                        <input
                                            id="terms"
                                            type="checkbox"
                                            required
                                            className="form-checkbox h-5 w-5 text-primary focus:ring focus:ring-indigo-500"
                                        />

                                        <div className="ms-2">
                                            <label
                                                htmlFor="terms"
                                                className="text-sm text-gray-600 dark:text-gray-400"
                                            >
                                                I agree to the
                                                <a
                                                    target="_blank"
                                                    href={route("terms.show")}
                                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 mx-1"
                                                >
                                                    Terms of Service
                                                </a>
                                                and
                                                <a
                                                    target="_blank"
                                                    href={route("policy.show")}
                                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 mx-1"
                                                >
                                                    Privacy Policy
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between gap-4 mt-4">
                                    <PrimaryButton
                                        className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                        onClick={prevStep}
                                    >
                                        Previous Step
                                    </PrimaryButton>
                                    <PrimaryButton
                                        className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                        disabled={processing}
                                    >
                                        Register
                                    </PrimaryButton>
                                </div>
                                <div className="flex justify-center px-3 pt-4">
                                    <p className="text-gray-400 text-xs">4/4</p>
                                </div>
                            </div>
                        )}
                    </form>

                    <div className="flex flex-row gap-1 justify-center items-center mt-4 text-center">
                        <p>Already registered?</p>
                        <Link
                            href={route("login")}
                            className="text-primary underline hover:text-skyWater"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

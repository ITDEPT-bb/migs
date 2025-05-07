import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Image imports
import signInVector from "/public/image/Auth/signInVector.png";
import clouds from "/public/image/Auth/clouds.png";
import logo from "/public/image/Hero/LOGO.png";

export default function Login({ status, canResetPassword }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Log in" />

            <div className="lg:max-w-full lg:h-screen flex justify-center items-center overflow-hidden">
                {/* Left Side: Illustration and Text */}
                <div className="hidden lg:flex flex-col w-1/2 lg:min-h-screen p-24 bg-primary items-center justify-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-auto hidden mb-6 md:block"
                    />
                    <img
                        src={signInVector}
                        alt="Creative Design"
                        className="w-3/4 mb-6"
                    />
                    <h1 className="text-2xl font-semibold text-white text-center">
                        Unlock Your Creative Potential
                    </h1>
                    <p className="text-md text-center text-white mt-4">
                        Step into a world of limitless design possibilities!
                        Whether you're here to master the fundamentals or
                        elevate your skills, we're excited to be part of your
                        creative journey.
                    </p>
                    <p className="mt-8 text-center text-white font-semibold">
                        • We Learn • We Acquire • We Understand • We Master
                    </p>
                </div>

                {/* Right Side: Login Form */}
                <div
                    className="w-full lg:w-1/2 p-3 lg:p-8 lg:min-h-screen bg-gray-200 flex flex-col items-center justify-center"
                    style={{
                        // backgroundImage: `url(${clouds})`,
                        // backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    <h2 className="text-4xl font-bold text-center text-primary mb-2">
                        LOG IN
                    </h2>
                    <h2 className="text-lg font-normal text-center mb-6 p-o lg:px-20">
                        To access your courses, projects, and resources, and let
                        your imagination take flight.
                    </h2>

                    <form onSubmit={submit} className="px-0 lg:px-16 w-full">
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block rounded-none w-full border-0 border-l-8 border-primary"
                                autoComplete="username"
                                placeholder="Email"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
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
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex justify-between mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ml-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="underline text-sm text-primary hover:text-skyWater"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        <div className="flex items-center mt-4">
                            <PrimaryButton
                                className="w-full text-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-skyWater"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </div>

                        <div className="flex flex-row gap-1 justify-center items-center mt-4 text-center">
                            <p>Don't have an account yet? </p>
                            <Link
                                href={route("register")}
                                className="text-primary underline hover:text-skyWater"
                            >
                                Create Account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

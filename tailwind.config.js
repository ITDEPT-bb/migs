import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
		"./storage/framework/views/*.php",
		"./resources/views/**/*.blade.php",
		"./resources/js/**/*.jsx",
		"./node_modules/flowbite/**/*.js",
	],

	theme: {
		extend: {
			fontFamily: {
				// sans: ["Figtree", ...defaultTheme.fontFamily.sans],
				sans: ["Arial", ...defaultTheme.fontFamily.sans],
				impact: ["Impact", "sans-serif"],
				lora: ["Lora", "serif"],
				arial: ["Arial", "sans-serif"],
				arialRounded: ["ArialRoundedMTBold", "sans-serif"],
			},
			colors: {
				primary: "#3884DC",
				secondary: "#2B64A6",
				accent: "#0F75B2",
				lightBlue: "#3582DC",
				skyBlue: "#70CEF0",
				darkBlue: "#064996",
				deepBlue: "#065FC4",
				bgSkyBlue: "#e2f5fc",

				oceanBlue: "#1174B7",
				skyWater: "#2FA4DC",
				aquaWave: "#0FBDF0",
				softCyan: "#6FCFF6",
				softBlue: "#bde6fa",
				cloudWhite: "#F5F6FA",
				sunYellow: "#FDC800",
				rosePink: "#F3426E",
				mintTeal: "#58BAAB",
				royalPurple: "#7237E9",
				creamYellow: "#F9EBA7",
				paleWhite: "#FAFBEE",
			},
		},
	},

	plugins: [forms, "flowbite/plugin"],
};

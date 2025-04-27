// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://manit.pages.dev"; // Retained, correct for your deployment

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
}; // Retained, good structure

// Enable password protection on selected routes
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
}; // Retained, adds exclusivity

import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'

const primaryFont = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const satoshi = localFont({
  src: './satoshi.woff2',
  variable: '--font-primary',
  subsets: ['latin'], // Optional, for character set specification
  display: 'swap', // Prevents FOIT, improves performance
  weight: '400', // Regular weight
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: satoshi,
  tertiary: primaryFont,
  code: monoFont,
}; // Retained, Geist is a strong choice
const style = {
  theme: "dark",
  neutral: "slate",
  brand: "cyan",
  accent: "magenta",
  solid: "contrast",
  solidStyle: "flat",
  border: "rounded",
  surface: "translucent",
  transition: "macro",
  scaling: "105",
}; // Retained, already optimized

const effects = {
  mask: {
    cursor: true, // Changed to true
    x: 50,
    y: 0,
    radius: 120, // Increased for a softer effect
  },
  gradient: {
    display: true, // Changed to true
    opacity: 60, // Lowered for subtlety
    x: 50,
    y: 50,
    width: 80, // Adjusted for balance
    height: 80,
    tilt: 45, // Added tilt for dynamism
    colorStart: "brand-background-strong", // Cyan for consistency
    colorEnd: "static-transparent", // Fades to transparent
  },
  dots: {
    display: true,
    opacity: 30, // Slightly reduced for subtlety
    size: "3", // Increased for visibility
    color: "brand-background-strong", // Retained, cyan dots
  },
  grid: {
    display: false, // Retained, avoids clutter
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false, // Retained, avoids clutter
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true,
}; // Retained, adds personality

const mailchimp = {
  action: "https://url/subscribe/post?parameters", // Update with your Mailchimp URL
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 150, // Increased for a larger, more immersive effect
    },
    gradient: {
      display: true,
      opacity: 70, // Slightly reduced for elegance
      x: 50,
      y: 50, // Centered
      width: 60, // Adjusted for balance
      height: 60,
      tilt: 45, // Added tilt for visual interest
      colorStart: "accent-background-strong", // Magenta for the form
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 15, // Lowered for subtlety
      size: "3", // Increased for visibility
      color: "brand-on-background-weak", // Retained, cyan dots
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, font };
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Hero Section with Logo */}
      <section className="relative w-full py-8 md:py-12 bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center px-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
          {/* Logo and Brand */}
          <div className="flex items-center gap-6">
            {/* Heart Logo */}
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              {/* Outer heart shape */}
              <div className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 85C50 85 20 65 20 40C20 25 30 15 45 15C55 15 50 25 50 35C50 25 45 15 35 15C20 15 10 25 10 40C10 65 50 85 50 85Z"
                    fill="white"
                    stroke="#1e3a8a"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              {/* Inner figures */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-end gap-1">
                  {/* Female figure */}
                  <div className="w-3 h-6 bg-blue-800 rounded-full relative">
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-800 rounded-full"></div>
                  </div>
                  {/* Male figure with cane */}
                  <div className="w-3 h-6 bg-blue-800 rounded-full relative">
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-800 rounded-full"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-1 bg-blue-800 rounded-full transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-800 leading-tight">
                {t("homePage.title")}
              </h1>
              <p className="text-lg md:text-xl text-blue-700 font-medium">
                {t("homePage.tagline")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Text and Button */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-neutral-700">
                {t("homePage.description")}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button className="px-10 py-4 text-lg font-semibold bg-neutral-200 text-neutral-800 hover:bg-neutral-300 transition-colors rounded-full shadow-md">
                {t("homePage.ourServiceButton")}
              </Button>
            </div>
          </div>

          {/* Right Content - Service Images */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gradient-to-b from-blue-100 to-blue-200 relative">
                {/* Cloud and hills placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-8 bg-white rounded-full mb-4 opacity-80"></div>
                  <div className="w-full h-8 bg-green-300 rounded-t-full absolute bottom-0"></div>
                  <div className="w-3/4 h-6 bg-green-400 rounded-t-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gradient-to-b from-blue-100 to-blue-200 relative">
                {/* Cloud and hills placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-8 bg-white rounded-full mb-4 opacity-80"></div>
                  <div className="w-full h-8 bg-green-300 rounded-t-full absolute bottom-0"></div>
                  <div className="w-3/4 h-6 bg-green-400 rounded-t-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gradient-to-b from-blue-100 to-blue-200 relative">
                {/* Cloud and hills placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-8 bg-white rounded-full mb-4 opacity-80"></div>
                  <div className="w-full h-8 bg-green-300 rounded-t-full absolute bottom-0"></div>
                  <div className="w-3/4 h-6 bg-green-400 rounded-t-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

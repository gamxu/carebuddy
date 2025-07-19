"use client";

import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, { locale });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl sm:text-2xl font-bold text-neutral-700">
              CARE BUDDY
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {t("navigation.home")}
            </Link>
            <Link
              href="/about-us"
              className="text-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {t("navigation.aboutUs")}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer">
                  {t("navigation.ourServices")}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link
                    href="/our-services/care-buddy-service"
                    className="w-full"
                  >
                    {t("services.careBuddyService")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/our-services/noti-drugs" className="w-full">
                    {t("services.notiDrugs")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/our-services/wellness-activities"
                    className="w-full"
                  >
                    {t("services.wellnessActivities")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/join-us"
              className="text-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {t("navigation.joinUs")}
            </Link>
          </nav>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => handleLanguageChange("en")}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/en.svg"
                width={32}
                height={24}
                alt="US Flag"
                className="rounded shadow-sm"
              />
            </button>
            <button
              onClick={() => handleLanguageChange("th")}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/th.svg"
                width={32}
                height={24}
                alt="Thailand Flag"
                className="rounded shadow-sm"
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher - Mobile */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handleLanguageChange("en")}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/en.svg"
                  width={24}
                  height={18}
                  alt="US Flag"
                  className="rounded shadow-sm"
                />
              </button>
              <button
                onClick={() => handleLanguageChange("th")}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/th.svg"
                  width={24}
                  height={18}
                  alt="Thailand Flag"
                  className="rounded shadow-sm"
                />
              </button>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-50 rounded-lg mt-2 mb-4">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
              onClick={closeMenu}
            >
              {t("navigation.home")}
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
              onClick={closeMenu}
            >
              {t("navigation.aboutUs")}
            </Link>
            <div className="px-3 py-2">
              <div className="text-base font-medium text-neutral-700 mb-2">
                {t("navigation.ourServices")}
              </div>
              <div className="pl-4 space-y-1">
                <Link
                  href="/our-services/care-buddy-service"
                  className="block px-3 py-2 rounded-md text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
                  onClick={closeMenu}
                >
                  {t("services.careBuddyService")}
                </Link>
                <Link
                  href="/our-services/noti-drugs"
                  className="block px-3 py-2 rounded-md text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
                  onClick={closeMenu}
                >
                  {t("services.notiDrugs")}
                </Link>
                <Link
                  href="/our-services/wellness-activities"
                  className="block px-3 py-2 rounded-md text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
                  onClick={closeMenu}
                >
                  {t("services.wellnessActivities")}
                </Link>
              </div>
            </div>
            <Link
              href="/join-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
              onClick={closeMenu}
            >
              {t("navigation.joinUs")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

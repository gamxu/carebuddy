"use client";

import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
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

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <div className="flex items-center justify-between gap-8 py-4 bg-neutral-100 shadow-sm px-40 mx-auto">
      <div className="text-2xl font-bold text-neutral-700">CARE BUDDY</div>
      <nav className="flex-1 flex justify-end gap-8 text-lg font-medium">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          {t("navigation.home")}
        </Link>
        <Link
          href="/about-us"
          className="hover:text-neutral-900 transition-colors"
        >
          {t("navigation.aboutUs")}
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-lg font-medium hover:text-neutral-900 transition-colors cursor-pointer">
              {t("navigation.ourServices")}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>
              <Link href="/our-services/care-buddy-service" className="w-full">
                {t("services.careBuddyService")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/our-services/noti-drugs" className="w-full">
                {t("services.notiDrugs")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/our-services/wellness-activities" className="w-full">
                {t("services.wellnessActivities")}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="/join-us"
          className="hover:text-neutral-900 transition-colors"
        >
          {t("navigation.joinUs")}
        </Link>
        {/* <Link
          href="/contact"
          className="hover:text-neutral-900 transition-colors"
        >
          {t("navigation.contact")}
        </Link> */}
      </nav>
      <div className="flex items-center space-x-2">
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
    </div>
  );
}

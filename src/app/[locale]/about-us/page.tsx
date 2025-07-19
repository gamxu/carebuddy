import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function AboutUsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-neutral-800 text-center lg:text-left">
          {t("aboutUsPage.title")}
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Section - Illustration */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-b from-blue-100 to-green-100 rounded-lg shadow-sm overflow-hidden order-2 xl:order-1">
            {/* Sky with cloud */}
            <div className="absolute top-0 left-0 right-0 h-3/5 bg-gradient-to-b from-blue-200 to-blue-100">
              {/* Cloud */}
              <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 w-20 h-12 sm:w-32 sm:h-20 bg-white rounded-full opacity-80"></div>
              <div className="absolute top-6 sm:top-12 left-1/2 transform -translate-x-1/2 w-16 h-10 sm:w-24 sm:h-16 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-8 sm:top-16 left-1/2 transform -translate-x-1/2 w-12 h-8 sm:w-20 sm:h-12 bg-white rounded-full opacity-40"></div>
            </div>
            {/* Hills */}
            <div className="absolute bottom-0 left-0 right-0 h-2/5">
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-green-200 rounded-t-full"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-300 rounded-t-full"></div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 xl:order-2">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
              {t("aboutUsPage.description1")}
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
              {t("aboutUsPage.description2")}
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
              {t("aboutUsPage.description3")}
            </p>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-base sm:text-lg md:text-xl font-semibold text-neutral-800">
                {t("aboutUsPage.servicesList.title")}
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700 space-y-1 sm:space-y-2 pl-4 sm:pl-6">
                {t
                  .raw("aboutUsPage.servicesList.items")
                  .map((item: string, index: number) => (
                    <li key={index} className="pl-2">
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
              {t("aboutUsPage.conclusion")}
            </p>
            <div className="flex justify-center xl:justify-start pt-4 sm:pt-6">
              <Button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-neutral-200 text-neutral-800 hover:bg-neutral-300 transition-colors rounded-full font-medium">
                {t("aboutUsPage.readMoreButton")}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

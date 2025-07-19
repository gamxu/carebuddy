import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function AboutUsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-neutral-800">
          {t("aboutUsPage.title")}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Illustration */}
          <div className="relative w-full h-[500px] bg-gradient-to-b from-blue-100 to-green-100 rounded-lg shadow-sm overflow-hidden">
            {/* Sky with cloud */}
            <div className="absolute top-0 left-0 right-0 h-3/5 bg-gradient-to-b from-blue-200 to-blue-100">
              {/* Cloud */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-white rounded-full opacity-80"></div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-white rounded-full opacity-40"></div>
            </div>
            {/* Hills */}
            <div className="absolute bottom-0 left-0 right-0 h-2/5">
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-green-200 rounded-t-full"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-300 rounded-t-full"></div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-neutral-700">
              {t("aboutUsPage.description1")}
            </p>
            <p className="text-lg leading-relaxed text-neutral-700">
              {t("aboutUsPage.description2")}
            </p>
            <p className="text-lg leading-relaxed text-neutral-700">
              {t("aboutUsPage.description3")}
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed text-neutral-700 space-y-2">
              <p>{t("aboutUsPage.servicesList.title")}</p>
              {t
                .raw("aboutUsPage.servicesList.items")
                .map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="text-lg leading-relaxed text-neutral-700">
              {t("aboutUsPage.conclusion")}
            </p>
            <div className="flex justify-end pt-4">
              <Button className="px-8 py-3 text-lg bg-neutral-200 text-neutral-800 hover:bg-neutral-300 transition-colors rounded-full font-medium">
                {t("aboutUsPage.readMoreButton")}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function CareBuddyServicePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            {t("careBuddyServicePage.title")}
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Basic Plan */}
          <div className="bg-blue-500 rounded-lg p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {t("careBuddyServicePage.plans.basic.title")}
              </h2>
              <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                {t("careBuddyServicePage.plans.basic.price")}
              </div>

              <div className="text-left">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Features:
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {t
                    .raw("careBuddyServicePage.plans.basic.features")
                    .map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8">
                <Button className="w-full bg-white text-blue-500 hover:bg-gray-100 font-semibold py-2 sm:py-3 rounded-lg text-sm sm:text-base">
                  {t("careBuddyServicePage.chooseButton")}
                </Button>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-white rounded-lg p-4 sm:p-6 text-blue-600 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {t("careBuddyServicePage.plans.standard.title")}
              </h2>
              <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                {t("careBuddyServicePage.plans.standard.price")}
              </div>

              <div className="text-left">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Features:
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {t
                    .raw("careBuddyServicePage.plans.standard.features")
                    .map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8">
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 sm:py-3 rounded-lg text-sm sm:text-base">
                  {t("careBuddyServicePage.chooseButton")}
                </Button>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg p-4 sm:p-6 text-blue-600 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {t("careBuddyServicePage.plans.premium.title")}
              </h2>
              <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                {t("careBuddyServicePage.plans.premium.price")}
              </div>

              <div className="text-left">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Features:
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {t
                    .raw("careBuddyServicePage.plans.premium.features")
                    .map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8">
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 sm:py-3 rounded-lg text-sm sm:text-base">
                  {t("careBuddyServicePage.chooseButton")}
                </Button>
              </div>
            </div>
          </div>

          {/* Custom Plan */}
          <div className="bg-white rounded-lg p-4 sm:p-6 text-blue-600 shadow-lg border hover:shadow-xl transition-shadow">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {t("careBuddyServicePage.plans.custom.title")}
              </h2>
              <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                {t("careBuddyServicePage.plans.custom.price")}
              </div>

              <div className="text-left">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  Features:
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {t
                    .raw("careBuddyServicePage.plans.custom.features")
                    .map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8">
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 sm:py-3 rounded-lg text-sm sm:text-base">
                  {t("careBuddyServicePage.chooseButton")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 px-4">
            {t("careBuddyServicePage.additionalInfo.description")}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 px-4">
            {t("careBuddyServicePage.additionalInfo.contactInfo")}
          </p>
        </div>
      </div>
    </div>
  );
}

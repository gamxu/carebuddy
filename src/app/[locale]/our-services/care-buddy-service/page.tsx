import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function CareBuddyServicePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t("careBuddyServicePage.title")}
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Basic Plan */}
          <div className="bg-blue-500 rounded-lg p-6 text-white shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                {t("careBuddyServicePage.plans.basic.title")}
              </h2>
              <div className="text-3xl font-bold mb-6">
                {t("careBuddyServicePage.plans.basic.price")}
              </div>

              <div className="text-left">
                <h3 className="font-semibold mb-3">Features:</h3>
                <ul className="space-y-2 text-sm">
                  {t
                    .raw("careBuddyServicePage.plans.basic.features")
                    .map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-white text-blue-500 hover:bg-gray-100 font-semibold py-3 rounded-lg">
                  {t("careBuddyServicePage.chooseButton")}
                </Button>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-white rounded-lg p-6 text-blue-600 shadow-lg border">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                {t("careBuddyServicePage.plans.standard.title")}
              </h2>
              <div className="text-3xl font-bold mb-6">
                {t("careBuddyServicePage.plans.standard.price")}
              </div>

              <div className="text-left">
                <h3 className="font-semibold mb-3">Features:</h3>
                <ul className="space-y-2 text-sm">
                  {t
                    .raw("careBuddyServicePage.plans.standard.features")
                    .map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 font-semibold py-3 rounded-lg">
                  {t("careBuddyServicePage.chooseButton")}
                </Button>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg p-6 text-blue-600 shadow-lg border">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                {t("careBuddyServicePage.plans.premium.title")}
              </h2>
              <div className="text-3xl font-bold mb-6">
                {t("careBuddyServicePage.plans.premium.price")}
              </div>

              <div className="text-left">
                <h3 className="font-semibold mb-3">Features:</h3>
                <ul className="space-y-2 text-sm">
                  {t
                    .raw("careBuddyServicePage.plans.premium.features")
                    .map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 font-semibold py-3 rounded-lg">
                  {t("careBuddyServicePage.chooseButton")}
                </Button>
              </div>
            </div>
          </div>

          {/* Custom Plan */}
          <div className="bg-white rounded-lg p-6 text-blue-600 shadow-lg border">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                {t("careBuddyServicePage.plans.custom.title")}
              </h2>
              <div className="text-3xl font-bold mb-6">
                {t("careBuddyServicePage.plans.custom.price")}
              </div>

              <div className="text-left">
                <h3 className="font-semibold mb-3">Features:</h3>
                <ul className="space-y-2 text-sm">
                  {t
                    .raw("careBuddyServicePage.plans.custom.features")
                    .map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 font-semibold py-3 rounded-lg">
                  {t("careBuddyServicePage.chooseButton")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            {t("careBuddyServicePage.additionalInfo.description")}
          </p>
          <p className="text-sm text-gray-500">
            {t("careBuddyServicePage.additionalInfo.contactInfo")}
          </p>
        </div>
      </div>
    </div>
  );
}

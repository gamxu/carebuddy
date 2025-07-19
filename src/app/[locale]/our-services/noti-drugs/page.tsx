import { useTranslations } from "next-intl";

export default function NotiDrugsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-12">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
            {t("notiDrugsPage.title")}
          </h1>

          {/* Description */}
          <p className="font-medium text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            {t("notiDrugsPage.description")}
          </p>
          <p>{t("notiDrugsPage.descriptionThai")}</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Left Illustration */}
          <div className="relative h-64 md:h-80 bg-gradient-to-b from-blue-200 to-blue-300 rounded-xl overflow-hidden border border-blue-200">
            {/* Sky with clouds */}
            <div className="absolute inset-0">
              {/* Background sky gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-200"></div>

              {/* Clouds */}
              <div className="absolute top-8 left-8 w-16 h-8 bg-white rounded-full opacity-90"></div>
              <div className="absolute top-12 right-12 w-20 h-10 bg-white rounded-full opacity-90"></div>

              {/* Hills */}
              <div className="absolute bottom-0 left-0 right-0">
                {/* Background hills (darker green) */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-green-600 rounded-t-full"></div>
                <div className="absolute bottom-0 left-1/4 right-1/4 h-12 bg-green-600 rounded-t-full"></div>

                {/* Foreground hills (lighter green) */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-green-400 rounded-t-full"></div>
                <div className="absolute bottom-0 left-1/3 right-1/3 h-16 bg-green-400 rounded-t-full"></div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative h-64 md:h-80 bg-gradient-to-b from-blue-200 to-blue-300 rounded-xl overflow-hidden border border-blue-200">
            {/* Sky with clouds */}
            <div className="absolute inset-0">
              {/* Background sky gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-200"></div>

              {/* Clouds */}
              <div className="absolute top-8 left-8 w-16 h-8 bg-white rounded-full opacity-90"></div>
              <div className="absolute top-12 right-12 w-20 h-10 bg-white rounded-full opacity-90"></div>

              {/* Hills */}
              <div className="absolute bottom-0 left-0 right-0">
                {/* Background hills (darker green) */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-green-600 rounded-t-full"></div>
                <div className="absolute bottom-0 left-1/4 right-1/4 h-12 bg-green-600 rounded-t-full"></div>

                {/* Foreground hills (lighter green) */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-green-400 rounded-t-full"></div>
                <div className="absolute bottom-0 left-1/3 right-1/3 h-16 bg-green-400 rounded-t-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

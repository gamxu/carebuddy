import { useTranslations } from "next-intl";

export default function NotiDrugsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl">
        {/* Header Section */}
        <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 leading-tight">
            {t("notiDrugsPage.title")}
          </h1>

          {/* Description */}
          <div className="space-y-2 sm:space-y-3">
            <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed px-4">
              {t("notiDrugsPage.description")}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed px-4">
              {t("notiDrugsPage.descriptionThai")}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12 lg:mt-16">
          {/* Left Illustration */}
          <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-b from-blue-200 to-blue-300 rounded-xl overflow-hidden border border-blue-200 hover:shadow-lg transition-shadow">
            {/* Sky with clouds */}
            <div className="absolute inset-0">
              {/* Background sky gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-200"></div>

              {/* Clouds */}
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-12 h-6 sm:w-16 sm:h-8 bg-white rounded-full opacity-90"></div>
              <div className="absolute top-6 sm:top-12 right-6 sm:right-12 w-16 h-8 sm:w-20 sm:h-10 bg-white rounded-full opacity-90"></div>

              {/* Hills */}
              <div className="absolute bottom-0 left-0 right-0">
                {/* Background hills (darker green) */}
                <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-green-600 rounded-t-full"></div>
                <div className="absolute bottom-0 left-1/4 right-1/4 h-8 sm:h-12 bg-green-600 rounded-t-full"></div>

                {/* Foreground hills (lighter green) */}
                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-green-400 rounded-t-full"></div>
                <div className="absolute bottom-0 left-1/3 right-1/3 h-12 sm:h-16 bg-green-400 rounded-t-full"></div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-b from-blue-200 to-blue-300 rounded-xl overflow-hidden border border-blue-200 hover:shadow-lg transition-shadow">
            {/* Sky with clouds */}
            <div className="absolute inset-0">
              {/* Background sky gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-200"></div>

              {/* Clouds */}
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-12 h-6 sm:w-16 sm:h-8 bg-white rounded-full opacity-90"></div>
              <div className="absolute top-6 sm:top-12 right-6 sm:right-12 w-16 h-8 sm:w-20 sm:h-10 bg-white rounded-full opacity-90"></div>

              {/* Hills */}
              <div className="absolute bottom-0 left-0 right-0">
                {/* Background hills (darker green) */}
                <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-green-600 rounded-t-full"></div>
                <div className="absolute bottom-0 left-1/4 right-1/4 h-8 sm:h-12 bg-green-600 rounded-t-full"></div>

                {/* Foreground hills (lighter green) */}
                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-green-400 rounded-t-full"></div>
                <div className="absolute bottom-0 left-1/3 right-1/3 h-12 sm:h-16 bg-green-400 rounded-t-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

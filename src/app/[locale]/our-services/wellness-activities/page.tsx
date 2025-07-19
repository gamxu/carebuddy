"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import provinces from "./components/provinces";

interface Province {
  code: string;
  thaiName: string;
  englishName: string;
}

interface Activity {
  id: number;
  name: string;
  nameThai?: string;
  price: number;
  image: string;
}

const activities: Activity[] = [
  {
    id: 1,
    name: "spa",
    price: 5.0,
    image: "/api/placeholder/300/200",
  },
  {
    id: 2,
    name: "yogaClass",
    price: 5.0,
    image: "/api/placeholder/300/200",
  },
  {
    id: 3,
    name: "soapWorkshop",
    price: 5.0,
    image: "/api/placeholder/300/200",
  },
  {
    id: 4,
    name: "cookingClass",
    price: 5.0,
    image: "/api/placeholder/300/200",
  },
];

export default function WellnessActivitiesPage() {
  const locale = useLocale();
  const t = useTranslations();
  const [selectedProvince, setSelectedProvince] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (activityId: number) => {
    setCart((prev) => [...prev, activityId]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t("wellnessActivitiesPage.title")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 px-4">
            {t("wellnessActivitiesPage.description")}
          </p>

          {/* Province Selector */}
          <div className="flex justify-center sm:justify-start mb-4 sm:mb-6">
            <Select
              value={selectedProvince}
              onValueChange={setSelectedProvince}
            >
              <SelectTrigger className="w-full sm:w-[300px] text-sm sm:text-base">
                <SelectValue
                  placeholder={t("wellnessActivitiesPage.provinceSelector")}
                />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((province: Province) => (
                  <SelectItem key={province.code} value={province.code}>
                    {locale === "th" ? province.thaiName : province.englishName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-300 mb-6 sm:mb-8"></div>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Activity Image */}
              <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-b from-blue-200 to-green-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-2">
                      <div className="w-6 h-4 sm:w-8 sm:h-6 bg-blue-300 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-16 h-1.5 sm:w-20 sm:h-2 bg-green-300 rounded-full mx-auto"></div>
                      <div className="w-12 h-1.5 sm:w-16 sm:h-2 bg-green-300 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Details */}
              <div className="p-3 sm:p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base md:text-lg">
                  {t(`wellnessActivitiesPage.activityNames.${activity.name}`)}
                </h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  ฿{activity.price.toFixed(2)}
                </p>
                <Button
                  onClick={() => addToCart(activity.id)}
                  className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300 text-xs sm:text-sm"
                  variant="secondary"
                >
                  {t("wellnessActivitiesPage.addToCart")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

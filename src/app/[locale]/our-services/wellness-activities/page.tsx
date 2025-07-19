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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t("wellnessActivitiesPage.title")}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {t("wellnessActivitiesPage.description")}
          </p>

          {/* Province Selector */}
          <div className="flex justify-start mb-6">
            <Select
              value={selectedProvince}
              onValueChange={setSelectedProvince}
            >
              <SelectTrigger className="w-[300px]">
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
          <div className="border-t border-gray-300 mb-8"></div>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Activity Image */}
              <div className="relative h-48 bg-gradient-to-b from-blue-200 to-green-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
                      <div className="w-8 h-6 bg-blue-300 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-20 h-2 bg-green-300 rounded-full mx-auto"></div>
                      <div className="w-16 h-2 bg-green-300 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Details */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-2">
                  {t(`wellnessActivitiesPage.activityNames.${activity.name}`)}
                </h3>
                <p className="text-gray-700 mb-4">
                  ฿{activity.price.toFixed(2)}
                </p>
                <Button
                  onClick={() => addToCart(activity.id)}
                  className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300"
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

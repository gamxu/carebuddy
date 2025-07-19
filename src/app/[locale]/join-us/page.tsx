"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";

export default function JoinUsPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    prefix: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    workArea: "",
    jobType: "",
    source: "",
    agreeToPolicy: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-1 xl:order-2">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 text-center xl:text-left">
                {t("joinUsPage.title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center xl:text-left">
                {t("joinUsPage.description")}
              </p>
            </div>
            <div className="hidden xl:block">
              <ContactSection />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 order-2 xl:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center xl:text-left">
              {t("joinUsPage.formTitle")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prefix" className="text-sm sm:text-base">
                    {t("joinUsPage.form.prefix")}
                  </Label>
                  <Select
                    value={formData.prefix}
                    onValueChange={(value) =>
                      handleSelectChange("prefix", value)
                    }
                  >
                    <SelectTrigger className="w-full bg-amber-50 border-amber-200 focus:ring-amber-500 text-sm sm:text-base">
                      <SelectValue
                        placeholder={t("joinUsPage.placeholders.select")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={t("joinUsPage.prefixOptions.mr")}>
                        {t("joinUsPage.prefixOptions.mr")}
                      </SelectItem>
                      <SelectItem value={t("joinUsPage.prefixOptions.mrs")}>
                        {t("joinUsPage.prefixOptions.mrs")}
                      </SelectItem>
                      <SelectItem value={t("joinUsPage.prefixOptions.miss")}>
                        {t("joinUsPage.prefixOptions.miss")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm sm:text-base">
                    {t("joinUsPage.form.firstName")}
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                  <Label htmlFor="lastName" className="text-sm sm:text-base">
                    {t("joinUsPage.form.lastName")}
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm sm:text-base">
                    {t("joinUsPage.form.age")}
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-sm sm:text-base">
                    {t("joinUsPage.form.gender")}
                  </Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleSelectChange("gender", value)
                    }
                  >
                    <SelectTrigger className="w-full bg-amber-50 border-amber-200 focus:ring-amber-500 text-sm sm:text-base">
                      <SelectValue
                        placeholder={t("joinUsPage.placeholders.select")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={t("joinUsPage.genderOptions.male")}>
                        {t("joinUsPage.genderOptions.male")}
                      </SelectItem>
                      <SelectItem value={t("joinUsPage.genderOptions.female")}>
                        {t("joinUsPage.genderOptions.female")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm sm:text-base">
                  {t("joinUsPage.form.phone")}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-amber-50 border-amber-200 focus:ring-amber-500 text-sm sm:text-base"
                />
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="workArea" className="text-sm sm:text-base">
                    {t("joinUsPage.form.workArea")}
                  </Label>
                  <Input
                    id="workArea"
                    name="workArea"
                    type="text"
                    value={formData.workArea}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <div className="space-y-2">
                  <Label htmlFor="jobType" className="text-sm sm:text-base">
                    {t("joinUsPage.form.jobType")}
                  </Label>
                  <Input
                    id="jobType"
                    name="jobType"
                    type="text"
                    value={formData.jobType}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Row 5 */}
              <div className="space-y-2">
                <Label htmlFor="source" className="text-sm sm:text-base">
                  {t("joinUsPage.form.source")}
                </Label>
                <Input
                  id="source"
                  name="source"
                  type="text"
                  value={formData.source}
                  onChange={handleInputChange}
                  className="bg-amber-50 border-amber-200 focus:ring-amber-500 text-sm sm:text-base"
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      agreeToPolicy: checked as boolean,
                    }))
                  }
                  className="data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                />
                <Label
                  htmlFor="agreeToPolicy"
                  className="text-xs sm:text-sm text-gray-700"
                >
                  {t("joinUsPage.form.privacyPolicy")}
                </Label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center xl:justify-end pt-4">
                <Button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-sm sm:text-base"
                  disabled={!formData.agreeToPolicy}
                >
                  {t("joinUsPage.form.submit")}
                </Button>
              </div>
            </form>
          </div>
          <div className="xl:hidden order-3">
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactSection = () => {
  const t = useTranslations();
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center xl:text-left">
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          {t("joinUsPage.email")}
        </span>
        <span className="text-base sm:text-lg md:text-xl text-blue-600 ml-2">
          {t("joinUsPage.emailValue")}
        </span>
      </div>

      <div className="text-center xl:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
          {t("joinUsPage.contactTitle")}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
            <span className="text-base sm:text-lg md:text-xl text-gray-700">
              {t("joinUsPage.lineOfficial")}
            </span>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-500 rounded-lg flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

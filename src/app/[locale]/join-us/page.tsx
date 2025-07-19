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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                {t("joinUsPage.title")}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("joinUsPage.description")}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-lg font-semibold text-gray-700">
                  {t("joinUsPage.email")}
                </span>
                <span className="text-lg text-blue-600 ml-2">
                  {t("joinUsPage.emailValue")}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {t("joinUsPage.contactTitle")}
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      {t("joinUsPage.lineOfficial")}
                    </span>
                  </div>
                  <div className="w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t("joinUsPage.formTitle")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prefix">{t("joinUsPage.form.prefix")}</Label>
                  <Select
                    value={formData.prefix}
                    onValueChange={(value) =>
                      handleSelectChange("prefix", value)
                    }
                  >
                    <SelectTrigger className="w-full bg-amber-50 border-amber-200 focus:ring-amber-500">
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
                  <Label htmlFor="firstName">
                    {t("joinUsPage.form.firstName")}
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    {t("joinUsPage.form.lastName")}
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">{t("joinUsPage.form.age")}</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">{t("joinUsPage.form.gender")}</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleSelectChange("gender", value)
                    }
                  >
                    <SelectTrigger className="w-full bg-amber-50 border-amber-200 focus:ring-amber-500">
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
                <Label htmlFor="phone">{t("joinUsPage.form.phone")}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                />
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="workArea">
                    {t("joinUsPage.form.workArea")}
                  </Label>
                  <Input
                    id="workArea"
                    name="workArea"
                    type="text"
                    value={formData.workArea}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobType">
                    {t("joinUsPage.form.jobType")}
                  </Label>
                  <Input
                    id="jobType"
                    name="jobType"
                    type="text"
                    value={formData.jobType}
                    onChange={handleInputChange}
                    className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Row 5 */}
              <div className="space-y-2">
                <Label htmlFor="source">{t("joinUsPage.form.source")}</Label>
                <Input
                  id="source"
                  name="source"
                  type="text"
                  value={formData.source}
                  onChange={handleInputChange}
                  className="bg-amber-50 border-amber-200 focus:ring-amber-500"
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <Label
                  htmlFor="agreeToPolicy"
                  className="text-sm text-gray-700"
                >
                  {t("joinUsPage.form.privacyPolicy")}
                </Label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium"
                  disabled={!formData.agreeToPolicy}
                >
                  {t("joinUsPage.form.submit")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

const PhoneInput = () => {
  const [countryCode, setCountryCode] = useState("US"); // Default country code
  const [phone, setPhone] = useState("");

  // You can use appropriate country flag emojis
  const countryFlags = {
    US: "🇺🇸",
    UK: "🇬🧷",
    // Add more country codes and corresponding flags as needed
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="mt-2 flex items-center">
      <div className="mr-2">{countryFlags[countryCode]}</div>
      <div className="w-1/4">
        <select
          name="countryCode"
          id="countryCode"
          value={countryCode}
          onChange={handleCountryCodeChange}
          className="block w-full rounded-md border-2 border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
        >
          <option value="US">{countryFlags["US"]} +1 (US)</option>
          <option value="UK">{countryFlags["UK"]} +44 (UK)</option>
          {/* Add more country codes as needed */}
        </select>
      </div>
      <div className="flex-grow">
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter Phone Number"
          value={`${countryFlags[countryCode]} ${countryCode} ${phone}`}
          onChange={handlePhoneChange}
          className="block w-full rounded-md border-2 border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600"
        />
      </div>
    </div>
  );
};

export default PhoneInput;

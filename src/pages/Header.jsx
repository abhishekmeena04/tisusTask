import React, { useState } from "react";

const Header = () => {
  const [pinCode, setPinCode] = useState("");

  const handleChange = (event) => {
    const newPinCode = event.target.value.replace(/\D/g, "").slice(0, 6);
    setPinCode(newPinCode);
  };
  const countries = [
    { name: "India", code: "IN" },
    { name: "United States", code: "US" },
    { name: "Algeria", code: "DZ" },
    { name: "Afghanistan", code: "AF" },
    { name: "Australia", code: "AU" },
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
  ];
  const state = [
    { name: "Madhya Pradesh", code: "MP" },
    { name: "Uttar Pradesh", code: "UP" },
    { name: "Andhra Pradesh", code: "AP" },
  ];
  const address = [
    { name: "Home (7 am - 9 pm delivery)" },
    { name: "Office/Commercial (10 AM - 6 PM delivery)" },
  ];
  const [isChecked, setIsChecked] = useState(false);

  const handleChanged = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="bg-[#f3f3f3]">
      <div className="max-w-screen-xl mx-auto py-2 px-4 md:px-12">
        <h1 className="font-bold text-2xl mt-2">Add a new address</h1>
        <div className="dropdown py-6">
          <select className="dropdown-select py-3 px-2 w-full rounded text-black bg-[#f0f2f2] shadow-md">
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="full-name-input">
          <label className="font-semibold ml-1" htmlFor="firstName">
            Full Name:
          </label>{" "}
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your Full Name"
            className="first-name-input w-full py-3 px-2 border border-black rounded"
          />
        </div>
        <div className="mobile-number-input mt-2">
          <label className="font-semibold ml-1" htmlFor="mobileNumber">
            Mobile Number
          </label>{" "}
          <br />
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="10-digit mobile number without prefixes"
            className="mobile-number-field w-full py-3 px-2 border border-black rounded"
          />
        </div>
        <div className="pin-code-input mt-2">
          <label className="font-semibold ml-1" htmlFor="pinCode">
            PIN Code
          </label>{" "}
          <br />
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            maxLength={6}
            placeholder="6 digits [0-9] PIN Code"
            value={pinCode}
            onChange={handleChange}
            className="pin-code-field w-full py-3 px-2 border border-black rounded"
          />
        </div>
        <div className="address-input mt-2">
          <label htmlFor="flatNo" className="font-semibold ml-1">
            Flat, House no., Building, Company, Apartment
          </label>{" "}
          <br />
          <input
            type="text"
            id="flatNo"
            name="flatNo"
            placeholder=""
            className="address-field w-full py-3 px-2 border border-black rounded"
          />
        </div>
        <div className="address-input mt-2">
          <label htmlFor="flatNo" className="font-semibold ml-1">
            Area, Street, Sector, Village
          </label>{" "}
          <br />
          <input
            type="text"
            id="flatNo"
            name="flatNo"
            placeholder=""
            className="address-field w-full py-3 px-2 border border-black rounded"
          />
        </div>
        <div className="address-input mt-2">
          <label htmlFor="flatNo" className="font-semibold ml-1">
            Landmark
          </label>{" "}
          <br />
          <input
            type="text"
            id="flatNo"
            name="flatNo"
            placeholder="E.g. near apollo hospital"
            className="address-field w-full py-3 px-2 border border-black rounded"
          />
        </div>
        <div className="address-input mt-2">
          <label htmlFor="flatNo" className="font-semibold ml-1">
            Town/City
          </label>{" "}
          <br />
          <input
            type="text"
            id="flatNo"
            name="flatNo"
            placeholder=""
            className="address-field w-full py-3 px-2 border border-black rounded"
          />
        </div>
        <div className="dropdown py-6">
          <select className="dropdown-select py-3 px-2 w-full rounded bg-[#f0f2f2] shadow-md">
            <option value="">Select State</option>
            {state.map((stat) => (
              <option key={stat.code} value={stat.code}>
                {stat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="default-address-checkbox space-x-3 flex items-center">
          <input
            type="checkbox"
            id="defaultAddress"
            name="defaultAddress"
            checked={isChecked}
            onChange={handleChanged}
            className="default-address-input size-5"
          />
          <label htmlFor="defaultAddress" className="font-normal text-black">
            Make this my default address
          </label>
        </div>
        <h2 className="mt-3 font-bold text-xl">Add delivery instructions</h2>
        <p className="mt-2 text-black from-neutral-900">
          Preferences are used to plan your delivery. However, shipments can
          sometimes arrive early or later than planned.
        </p>
        <div className="dropdown py-6 ">
          <label htmlFor="flatNo" className="font-semibold ml-1">
            Address Type
          </label>{" "}
          <select className="dropdown-select py-3 px-2 w-full rounded bg-[#f0f2f2] shadow-md">
            <option value="">Select an Address Type</option>
            {address.map((addres) => (
              <option key={addres.code} value={addres.code}>
                {addres.name}
              </option>
            ))}
          </select>
        </div>
        <button className="w-full bg-[#ffd814] text-black py-3 rounded mb-6">
          Use this address
        </button>
      </div>
    </div>
  );
};

export default Header;

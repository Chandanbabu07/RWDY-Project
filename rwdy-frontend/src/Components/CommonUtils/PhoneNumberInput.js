import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");
  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <PhoneInput
        country={"in"} // Default country to India
        value={phone}
        onChange={(phone) => setPhone(phone)}
        onlyCountries={["in"]} // Show only India option
        inputStyle={{
          width: "100%", // Adjust to fit your form layout
          // padding: "14px",
          height: isMobile ? "33px" : "44px",
          borderRadius: "0.5rem",
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;

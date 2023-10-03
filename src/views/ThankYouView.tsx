import React from "react";
import { useSelector } from "react-redux";
import { selectFormData } from "../redux/formSlice";

const ThankYouView: React.FC = () => {
  const formData = useSelector(selectFormData);

  return (
    <div>
      <h2>Thank You for Submitting the Form!</h2>
      <div>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <strong>{key}: </strong>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThankYouView;

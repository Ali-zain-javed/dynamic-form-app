import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFormData, selectFormData } from "../redux/formSlice";
import { isFieldValid } from "../utils/validations";
import {
  FormContainer,
  FormGroup,
  SubmitButton,
  FieldGroup,
} from "../styles/FormStyles";

interface Field {
  id: string;
  label?: string; // Adding label for better accessibility
  placeholder?: string;
  required?: boolean;
  type: string;
  options?: string[]; // Adding options for select field
}

interface FormProps {
  fields: (Field | Field[])[];
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    const processField = (field: Field) => {
      if (field.required && !formData[field.id]) {
        alert(`Please fill in the ${field.label || field.id} field.`);
        isValid = false;
      }

      if (
        field.id === "email" &&
        field.required &&
        !isFieldValid("email", formData[field.id])
      ) {
        alert(`Please enter a valid email address.`);
        isValid = false;
      }

      if (
        field.id === "phone" &&
        field.required &&
        !isFieldValid("phone", formData[field.id])
      ) {
        alert(`Please enter a valid phone number.`);
        isValid = false;
      }
    };

    fields.forEach((field) => {
      if (Array.isArray(field)) {
        field.forEach((subField) => processField(subField));
      } else {
        processField(field);
      }
    });

    if (isValid) {
      onSubmit();
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div>
          {fields.map((field, index) => (
            <div
              key={index}
              className={Array.isArray(field) ? "field-group" : ""}>
              {Array.isArray(field) ? (
                <FieldGroup>
                  {field.map((subField) => (
                    <FormGroup key={subField.id}>
                      <label htmlFor={subField.id}>
                        {subField.label || subField.id}
                      </label>
                      <input
                        type={subField.type}
                        id={subField.id}
                        name={subField.id}
                        placeholder={
                          subField.placeholder || subField.label || subField.id
                        }
                        required={subField.required || false}
                        value={formData[subField.id] || ""}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  ))}
                </FieldGroup>
              ) : (
                <FormGroup>
                  <label htmlFor={field.id}>{field.label || field.id}</label>
                  {field.type === "select" ? (
                    <select
                      id={field.id}
                      name={field.id}
                      required={field.required || false}
                      value={formData[field.id] || ""}
                      onChange={handleChange}>
                      <option value="" disabled>
                        {field.placeholder ||
                          `Select ${field.label || field.id}`}
                      </option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder || field.label || field.id}
                      required={field.required || false}
                      value={formData[field.id] || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder || field.label || field.id}
                      required={field.required || false}
                      value={formData[field.id] || ""}
                      onChange={handleChange}
                    />
                  )}
                </FormGroup>
              )}
            </div>
          ))}
        </div>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default Form;

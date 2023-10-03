import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux"; // If you are using Redux
import { store } from "../redux/store"; // If you are using Redux
import Form from "./Form";
describe("Form Component", () => {
  it("Renders Form Fields Correctly", () => {
    const fields = [
      { id: "firstName", label: "First Name", required: true, type: "text" },
      { id: "lastName", label: "Last Name", required: true, type: "text" },
      { id: "email", label: "Email", required: true, type: "text" },
    ];

    const { getByLabelText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Form fields={fields} onSubmit={() => {}} />
      </Provider>
    );

    // Check if form fields are rendered
    fields.forEach((field) => {
      const label = getByLabelText(field.label || field.id);
      const placeholder = getByPlaceholderText(field.label || field.id);

      expect(label).toBeInTheDocument();
      expect(placeholder).toBeInTheDocument();
    });
  });

  it("Submits Form Successfully", () => {
    const fields = [
      { id: "firstName", label: "First Name", required: true, type: "text" },
      { id: "lastName", label: "Last Name", required: true, type: "text" },
      { id: "email", label: "Email", required: true, type: "text" },
    ];

    const mockSubmit = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <Form fields={fields} onSubmit={mockSubmit} />
      </Provider>
    );

    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});

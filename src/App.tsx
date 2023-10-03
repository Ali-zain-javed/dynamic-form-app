import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { FormContainer } from "./styles/FormStyles";
import Form from "./components/Form";
import ThankYouView from "./views/ThankYouView";

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const fields = [
    [
      {
        id: "firstName",
        placeholder: "First name",
        required: true,
        type: "text",
      },
      {
        id: "lastName",
        placeholder: "Last name",
        required: true,
        type: "text",
      },
    ],
    {
      id: "Email",
      required: true,
      type: "text",
    },
    {
      id: "address1",
      placeholder: "Address 1",
      type: "text",
    },
    [
      {
        id: "city",
        type: "text",
      },
      {
        id: "state",
        type: "text",
      },
      {
        id: "zip",
        type: "text",
      },
    ],
    {
      id: "phone",
      required: true,
      type: "text",
    },
    {
      id: "jobTitle",
      options: [
        "Engineer - lead",
        "Engineer - mid level",
        "Engineer - junion",
        "Engineer - front end focused",
        "Engineer - backend focused",
        "Engineer - full stack",
      ],
      placeholder: "Please select job title",
      type: "select",
    },
    {
      id: "reason",
      placeholder:
        "Describe why you are a good fit for the job you are applying for.",
      type: "textarea",
    },
  ];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <FormContainer>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  {!submitted ? (
                    <Form fields={fields} onSubmit={handleSubmit} />
                  ) : (
                    <ThankYouView />
                  )}
                </React.Fragment>
              }
            />

            <Route path="/thank-you" element={<ThankYouView />} />
          </Routes>
        </FormContainer>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

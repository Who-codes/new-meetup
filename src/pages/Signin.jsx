import { Button } from "@progress/kendo-react-buttons";
import { Field, Form, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import React from "react";
// import { Error } from "@progress/kendo-react-labels";

const Signin = () => {
  const EmailInput = (formRenderProps) => {
    const { validatonMessage, ...other } = formRenderProps;
    return (
      <div>
        <Input {...other} type={"email"} />
        {validatonMessage && <Error>{validatonMessage}</Error>}
      </div>
    );
  };

  const PasswordInput = (formRenderProps) => {
    const { validatonMessage, ...other } = formRenderProps;
    return (
      <div>
        <Input {...other} type={"password"} />
        {validatonMessage && <Error>{validatonMessage}</Error>}
      </div>
    );
  };
  return (
    <div
      className="k-d-flex k-justify-content-center k-align-items-center"
      style={{ height: "100vh" }}
    >
      <Form
        render={(formRenderProps) => (
          <FormElement
            style={{ border: "2px solid black", width: "60%", padding: "2rem" }}
          >
            <fieldset className="k-form-fieldset">
              <Field name="email" component={EmailInput} label={"Email"} />
              <Field
                name="password"
                component={PasswordInput}
                label={"Password"}
              />
            </fieldset>
            <Button>Signin</Button>
          </FormElement>
        )}
      />
    </div>
  );
};

export default Signin;

import { Button } from "@progress/kendo-react-buttons";
import { Field, Form, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Error } from "@progress/kendo-react-labels";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../utils/authContext";

const Signin = () => {
  const { signin } = useAuthContext();

  const EmailInput = (fieldRenderProps) => {
    const { validationMessage, ...other } = fieldRenderProps;
    return (
      <div>
        <Input {...other} type={"email"} />
        {validationMessage && <Error>{validationMessage}</Error>}
      </div>
    );
  };

  const PasswordInput = (formRenderProps) => {
    const { validationMessage, ...other } = formRenderProps;
    return (
      <div>
        <Input {...other} type={"password"} />
        {validationMessage && <Error>{validationMessage}</Error>}
      </div>
    );
  };

  const handleSubmit = (dataItem) => {
    signin(dataItem.email, dataItem.password);
  };

  return (
    <div
      className="k-d-flex k-justify-content-center k-align-items-center"
      style={{ height: "100vh" }}
    >
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement
            className=" k-rounded-md "
            style={{
              width: "60%",
              padding: "2rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px",
            }}
          >
            <legend>Signin</legend>
            <fieldset className="k-form-fieldset">
              <Field name="email" component={EmailInput} label={"Email"} />
              <Field
                name="password"
                component={PasswordInput}
                label={"Password"}
              />
            </fieldset>
            <Button
              className="k-button k-rounded-sm k-mt-6"
              themeColor={"primary"}
              type={"submit"}
              style={{ width: "25%" }}
              disabled={!formRenderProps.allowSubmit}
            >
              Signin
            </Button>
            <span className={"k-form-separator"} />
            <p className="k-mt-5">
              Don't have an account?{" "}
              {
                <Link
                  to={"/signup"}
                  className="k-link"
                  style={{ textDecoration: "underline" }}
                >
                  click here
                </Link>
              }
            </p>
          </FormElement>
        )}
      />
    </div>
  );
};

export default Signin;

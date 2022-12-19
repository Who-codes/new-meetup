import { Button } from "@progress/kendo-react-buttons";
import {
  Field,
  FieldWrapper,
  Form,
  FormElement,
} from "@progress/kendo-react-form";
import { Input, TextArea, TextBox } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { useAuthContext } from "../utils/authContext";

const AddMeetup = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = async (dataItem) => {
    const { title, imageUrl, description } = dataItem;
    await setDoc(doc(db, "allPosts", "posts"), {
      title,
      imageUrl,
      description,
    });
    navigate("/");
  };

  const TextAreaInput = (formRenderProps) => {
    const { validationMessage, label, id, ...other } = formRenderProps;
    return (
      <FieldWrapper>
        <Label editorId={id}>{label}</Label>
        <TextArea rows={4} id={id} {...other} />
        {validationMessage && <Error>{validationMessage}</Error>}
      </FieldWrapper>
    );
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
            className=" k-rounded-md"
            style={{
              width: "60%",
              padding: "2rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px",
            }}
          >
            <fieldset className="k-form-fieldset">
              <Field name="title" component={Input} label={"Title"} />
              <Field name="imageUrl" component={Input} label={"Image URL"} />
              <Field
                id="description"
                name="description"
                label="Description: "
                value
                component={TextAreaInput}
              />
            </fieldset>
            <Button
              className="k-button k-rounded-sm k-mt-6"
              themeColor={"primary"}
              type={"submit"}
              style={{ width: "25%" }}
              disabled={!formRenderProps.allowSubmit}
            >
              Add Post
            </Button>
          </FormElement>
        )}
      />
    </div>
  );
};

export default AddMeetup;

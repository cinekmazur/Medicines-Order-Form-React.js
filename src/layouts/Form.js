import React from "react";
import { Formik } from "formik";
import ClassicFormElement from "../components/ClassicFormElement";
import DropDownList from "../components/DropDownList";
import { departments, times, listOfMedicines } from "../components/formData";
import * as Yup from "yup";
import "../styles/Form.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  pin: Yup.number()
    .required()
    .integer()
    .positive()
    .max(999999, "PESEL can have just 6 numbers."),
  medicine: Yup.string().required(),
  amount: Yup.number()
    .required()
    .max(500, "We know that is a good stuff, but slow down cowboy.")
    .integer()
    .positive(),
  date: Yup.date().required(),
  department: Yup.string().required(),
  time: Yup.string().required(),
});

const Form = (props) => {
  return (
    <div className="formContainer">
      <h1 style={{ textAlign: "center", color: "white" }}>
        Medicines Order Form
      </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          pin: "",
          medicine: "",
          time: "",
          date: "",
          amount: "",
          department: "",
        }}
        onSubmit={async (values, actions) => {
          actions.resetForm();
          props.handleAddOrder(values);
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert("Order added successfully!");
        }}
        validationSchema={validationSchema}
      >
        {(formikprops) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = formikprops;
          return (
            <form onSubmit={handleSubmit} className="main-formik">
              <div className="formik-Container ">
                <ClassicFormElement
                  formikprops={formikprops}
                  value={values.firstName}
                  valueName={"firstName"}
                  name="Patient's First Name"
                  type="text"
                />
                <ClassicFormElement
                  formikprops={formikprops}
                  value={values.lastName}
                  valueName={"lastName"}
                  name="Patient's Surname"
                  type="text"
                />
                <ClassicFormElement
                  formikprops={formikprops}
                  value={values.pin}
                  valueName={"pin"}
                  name="Patient's ID"
                  type="number"
                />
                <DropDownList
                  formikprops={formikprops}
                  value={values.deparment}
                  valueName="department"
                  name="Department Of Delivery"
                  data={departments}
                />
                <button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
              </div>
              <div className="formik-Container ">
                <DropDownList
                  formikprops={formikprops}
                  value={values.medicine}
                  valueName="medicine"
                  name="Medicine"
                  data={listOfMedicines}
                />
                <ClassicFormElement
                  formikprops={formikprops}
                  value={values.amount}
                  valueName={"amount"}
                  name="Amount of Medicine (Pills)"
                  type="number"
                />
                <label htmlFor="date" style={{ display: "block" }}>
                  Date of Medicine Injection
                </label>
                <input
                  id="date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.date && touched.date
                      ? "text-input error"
                      : "text-input"
                  }
                />
                <div className="input-feedback">
                  {errors.date && touched.date && errors.date}
                </div>
                <DropDownList
                  formikprops={formikprops}
                  value={values.time}
                  valueName="time"
                  name="Time of Medicine Injection"
                  data={times}
                />
                <button type="submit" disabled={isSubmitting}>
                  Add
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;

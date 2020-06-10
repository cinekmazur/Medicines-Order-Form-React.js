import React from "react";

const ClassicFormElement = (props) => {
  const { handleChange, handleBlur, errors, touched } = props.formikprops;
  const { name, value, valueName, type } = props;
  return (
    <div>
      <label htmlFor={valueName} style={{ display: "block" }}>
        {name}
      </label>
      <input
        id={valueName}
        placeholder={`Enter ${name}`}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors[valueName] && touched[valueName]
            ? "text-input error"
            : "text-input"
        }
      />
      <div className="input-feedback">
        {errors[valueName] && touched[valueName] && errors[valueName]}
      </div>
    </div>
  );
};

export default ClassicFormElement;

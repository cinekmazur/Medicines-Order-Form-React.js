import React from "react";

const DropDownList = (props) => {
  const { handleChange, handleBlur, errors, touched } = props.formikprops;
  const { value, valueName, name, data } = props;

  return (
    <div>
      <label htmlFor={valueName} style={{ display: "block" }}>
        {name}
      </label>
      <select
        name={valueName}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: "block", width: "95%", height: "50px" }}
      >
        <option value="" label={`Select a ${name}`} />
        {data.map((option) => (
          <option key={option.id} value={option.value} label={option.value} />
        ))}
      </select>
      <div className="input-feedback">
        {errors[valueName] && touched[valueName] && errors[valueName]}
      </div>
    </div>
  );
};

export default DropDownList;

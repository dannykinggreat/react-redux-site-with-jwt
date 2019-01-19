import React from "react";
import PropTypes from "prop-types";
import { types } from "util";

const TextFieldGroup = ({
  error,
  type,
  name,
  handleChange,
  label,
  id,
  placeholder
}) => {
  return (
    <div className="form-group">
      <label className="control-label" htmlFor="username">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${error ? "is-invalid" : ""}`}
        name={name}
        id={id}
        aria-describedby="user name field"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <small className="form-text text-muted">{error}</small>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};
export default TextFieldGroup;

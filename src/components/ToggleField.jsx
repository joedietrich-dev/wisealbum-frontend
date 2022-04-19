import { Field, useField } from "formik";
import InputCheckbox from "./InputCheckbox";

function ToggleField({ label, ...props }) {
  const [, meta] = useField(props);
  return (
    <InputCheckbox>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field type="checkbox" name={props.name} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </InputCheckbox>
  );
}

export default ToggleField;

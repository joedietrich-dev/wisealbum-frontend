import { useField } from "formik";
import InputGroup from "./InputGroup";

function TextAreaInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <InputGroup>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </InputGroup>
  );
}

export default TextAreaInput;

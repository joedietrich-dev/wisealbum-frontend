import { Field, useField } from "formik";

function ToggleField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field type="checkbox" name={props.name} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
}

export default ToggleField;

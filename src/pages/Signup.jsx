import { Field, Form, Formik } from "formik";

function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="fullName" />
            {errors.fullName && touched.fullName ? <div>{errors.fullName}</div> : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <Field name="passwordConfirmation" type="password" />
            {errors.passwordConfirmation && touched.passwordConfirmation ? <div>{errors.passwordConfirmation}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;

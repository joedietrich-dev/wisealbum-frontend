import { Form, Formik } from "formik";
import TextInput from "../components/TextInput";
import { post } from "../helpers/fetchers/post";
import { signupValidation } from "../helpers/validationSchemas/signupValidation";

function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          full_name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={signupValidation}
        onSubmit={(values) => {
          post(`/signup`, {
            user: {
              ...values,
            },
          })
            .then((json) => console.dir(json))
            .catch((err) => console.error(err));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <TextInput label="Full Name" name="full_name" />
            <TextInput label="Email Address" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <TextInput label="Password Confirmation" name="password_confirmation" type="password" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;

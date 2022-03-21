import { Form, Formik } from "formik";
import TextInput from "../components/TextInput";

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
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          fetch(`${process.env.REACT_APP_QUERY_DOMAIN}/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: {
                ...values,
              },
            }),
          })
            .then((res) => {
              if (res.ok) {
                console.log(res.headers.get("Authorization"));
                localStorage.setItem("token", res.headers.get("Authorization"));
                return res.json();
              } else {
                throw new Error(res);
              }
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

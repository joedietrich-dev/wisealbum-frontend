import { Form, Formik } from "formik";
import TextInput from "../components/TextInput";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          fetch(`${process.env.REACT_APP_QUERY_DOMAIN}/login`, {
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
        {() => (
          <Form>
            <TextInput label="Email Address" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;

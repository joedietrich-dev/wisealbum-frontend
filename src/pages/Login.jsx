import { Form, Formik } from "formik";
import TextInput from "../components/TextInput";
import { useAuth } from "../helpers/AuthorizationProvider";

function Login() {
  const { user, handleLogin } = useAuth();
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
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

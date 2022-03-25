import { Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import { useAuth } from "../helpers/AuthorizationProvider";

function Login() {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    handleLogin(data, () => {
      navigate("/dashboard");
    });
    navigate();
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
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

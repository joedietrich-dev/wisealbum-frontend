import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import { useAuth } from "../helpers/AuthorizationProvider";

function Login() {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    handleLogin(data, () => {
      navigate("/dashboard");
    });
  };

  return (
    <ModalCard>
      <Title>Login</Title>
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
    </ModalCard>
  );
}

export default Login;

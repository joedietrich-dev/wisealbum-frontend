import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import Title from "../components/Title";
import { noResponseGet } from "../helpers/fetchers/get";

const ThankYouMessage = () => (
  <div>
    Thank you for verifying your email address, please <Link to="/login">Log In</Link> to continue.
  </div>
);

function Verify() {
  const { verificationToken } = useParams();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (!isVerified) {
      noResponseGet(`/confirmation?confirmation_token=${verificationToken}`).then(() => {
        setIsVerified(true);
      });
    }
  }, [verificationToken, isVerified]);
  return (
    <ModalCard>
      <Title>Verify Account</Title>
      <div>{isVerified ? <ThankYouMessage /> : "Verifying"}</div>
    </ModalCard>
  );
}

export default Verify;

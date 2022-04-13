import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import Title from "../components/Title";
import { noResponseGet } from "../helpers/fetchers/get";

function Verify() {
  const { verificationToken } = useParams();
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    noResponseGet(`/confirmation?confirmation_token=${verificationToken}`).then((json) => {
      console.log(json);
      setIsVerified(true);
    });
  }, [verificationToken]);
  return (
    <ModalCard>
      <Title>Verify Account</Title>
      <div>{isVerified ? "Verified" : "Verifying"}</div>
    </ModalCard>
  );
}

export default Verify;

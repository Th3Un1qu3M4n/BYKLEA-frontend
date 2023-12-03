import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);

  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:3000/verifyemail/${param.id}/verify/${param.token}`;

        const { data } = await axios.get(url);

        console.log(data);

        setValidUrl(true);
      } catch (error) {
        console.log(error);

        setValidUrl(false);
      }
    };

    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      {validUrl ? (
        <div>
          
          <h1>Email Verified Successfully</h1>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;

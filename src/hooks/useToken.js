import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useToken = () => {
  
  const token = JSON.parse(sessionStorage.getItem("token"));
  const tcid = JSON.parse(sessionStorage.getItem("tcid"));
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    if(token) {
      const decodedJwt = jwtDecode(token);
      
      if(decodedJwt.exp * 1000 < new Date().getTime()) {
        setIsTokenExpired(true);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("tcid");
      } else {
        tcid === parseInt(decodedJwt.sub) ? setIsTokenExpired(false) : setIsTokenExpired(true);
      }

    } else {
      setIsTokenExpired(true);
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("tcid");
    }
  }, [isTokenExpired, token, tcid]);

  return isTokenExpired;
}

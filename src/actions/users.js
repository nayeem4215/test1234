import axios from "axios";
import { useContext } from "react";
import { AuthStatusContext } from "../context/userContext";

const config = {
  headers: {
    // set any headers you need, such as Content-Type
    "Content-Type": "application/json",
  },
  //   withCredentials: true, // set withCredentials to true to send cookies
};

export function signIn(user, setAuthStatus) {
  axios
    .post("http://localhost:3001/api/auth/login", user, config)
    .then((response) => {
      // handle successful response
      console.log(response.data.user);
      setAuthStatus(response.data.user);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
    })
    .catch((error) => {
      // handle error
    });
}

export function signOut(user, setAuthStatus) {
  axios
    .post("http://localhost:3001/api/auth/logout", user, config)
    .then((response) => {
      // handle successful response
      console.log(response.data.user);
      setAuthStatus(response.data.user);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
    })
    .catch((error) => {
      // handle error
    });
}

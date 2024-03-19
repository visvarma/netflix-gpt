import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const signInService = async (email, password) => {
  const response = {};
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    response.user = user;
  } catch (error) {
    response.error = error;
  }
  return response;
};

export default signInService;

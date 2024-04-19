import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { USER_AVATAR } from "../utils/constants";

export const signupService = async (email, password, name) => {
  const response = {};
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {
      displayName: name,
      photoURL: USER_AVATAR,
    });
    const user = userCredential.user;
    response.user = user;
  } catch (error) {
    response.error = error;
  }
  return response;
};

// createUserWithEmailAndPassword(
//   auth,
//   email.current.value,
//   password.current.value
// )
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     updateProfile(user, {
//       displayName: name.current.value,
//       photoURL: USER_AVATAR,
//     })
//       .then(() => {
//         const { uid, email, displayName, photoURL } = auth.currentUser;
//         dispatch(
//           addUser({
//             uid: uid,
//             email: email,
//             displayName: displayName,
//             photoURL: photoURL,
//           })
//         );
//       })
//       .catch((error) => {
//         setErrorMessage(error.message);
//       });
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setErrorMessage(errorMessage + "-" + errorCode);
//     // ..
//   });

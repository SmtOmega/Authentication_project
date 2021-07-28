import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useUserGlobalContext } from "../store/context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const changePassInputRef = useRef();
  const {token} = useUserGlobalContext()
  const history = useHistory()

  const submitHandler = async(e) => {
    e.preventDefault();

    const enteredChangedPass = changePassInputRef.current.value;
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API]",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: enteredChangedPass,
          returnSecureToken: true
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if(response.ok){
      history.replace('/')
      //const data = await response.json()
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength='7' ref={changePassInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

import { ChangeEvent, useState, FC } from "react";

import MyButton from "../ui/button/MyButton";
import MyInput from "../ui/input/MyInput";
import "./styles.css";

const strengthLabels = ["weak", "medium", "strong"];

export const Signup: FC = () => {
  const [strength, setStrength] = useState<string | undefined>("");

  const getStrength = (password: string) => {
    console.log(password);

    let strengthIndicator: number = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);

      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }

    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => getStrength(event.target.value);

  return (
    <div className="login-card">
      <h2>Sign Up</h2>
      <form className="login-form">
        <MyInput autoComplete="off" spellCheck={false} type="text" placeholder="Username" />
        <MyInput name="password" spellCheck={false} type="password" placeholder="Password" handleChange={handleChange} />
        <div className={`bars ${strength}`}>
          <div></div>
        </div>
        <div className="strength">{strength && <>{strength} password</>}</div>
        <MyButton>JOIN</MyButton>
      </form>
    </div>
  );
};

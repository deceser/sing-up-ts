import { ChangeEvent } from "react";

interface Props {
  name?: string;
  spellCheck: boolean;
  type: string;
  placeholder: string;
  autoComplete?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const MyInput = (props: Props) => {
  const { name, spellCheck, type, placeholder, autoComplete, handleChange } = props;
  return (
    <input
      className="control"
      name={name}
      spellCheck={spellCheck}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      autoComplete={autoComplete}
    />
  );
};

export default MyInput;

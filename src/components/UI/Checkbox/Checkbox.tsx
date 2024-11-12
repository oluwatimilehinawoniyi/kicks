import { useState } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  title: string;
}

export default function Checkbox({ title }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.checkbox}>
      <label>
        <input
          type="checkbox"
          name={title}
          id={title.split(" ").join("")}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {title}
      </label>
    </div>
  );
}

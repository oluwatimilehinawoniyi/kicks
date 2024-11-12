import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
}) => {
  return (
    <button
      className={styles.button}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

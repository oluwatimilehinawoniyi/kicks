import styles from "./Choice.module.css";

interface BaseProps {
  width: string
}

interface SizeProps extends BaseProps {
  role: "size";
  sizes: { value: number; available: boolean }[];
}

interface ColourProps extends BaseProps {
  role: "colour";
  colours: { value: string; available: boolean }[];
}

type ChoiceType = SizeProps | ColourProps;

export default function Choice(props: ChoiceType) {
  return (
    <div className={styles.choices} style={{
      width: props.width,
    }}>
      {props.role === "size"
        ? props.sizes.map((size) => (
          <div
            key={size.value}
            style={{
              backgroundColor: size.available ? "white" : "var(--gray)",
              color: size.available
                ? "var(--dark-gray)"
                : "var(--light-gray)",
              cursor: size.available ? "pointer" : "not-allowed",
              opacity: size.available ? 1 : 0.35,
            }}
            className={styles.choice_box}
          >
            {size.value}
          </div>
        ))
        : props.colours.map((colour) => (
          <div
            key={colour.value}
            style={{
              backgroundColor: colour.value,
              opacity: colour.available ? 1 : 0.35,
              cursor: colour.available ? "pointer" : "not-allowed",
            }}
            className={styles.choice_box}
          ></div>
        ))}
    </div>
  );
}

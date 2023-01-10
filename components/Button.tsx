import styles from "../styles/Button.module.scss";

type ButtonProps = {
  background: string;
  value: string;
  color?: string;
  zero?: boolean;
};
function Button({ background, value, color, zero }: ButtonProps) {
  return (
    <button
      className={styles.button}
      style={
        zero
          ? {
              width: "44%",
              backgroundColor: background,
              color: color,
              borderRadius: "999em",
              aspectRatio: "auto",
            }
          : { backgroundColor: background, color: color }
      }
    >
      {value}
    </button>
  );
}
export default Button;

import clsx from "clsx";
import { FC, useId } from "react";
import { ITextField } from "../../types/types.dto";
import styles from "./ui-text-field.module.scss";

const UiTextField: FC<ITextField> = ({
  className,
  error,
  label,
  inputProps,
}) => {
  const id = useId();
  return (
    <div className={clsx(className, styles.textField)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(inputProps?.className, styles.input)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default UiTextField;

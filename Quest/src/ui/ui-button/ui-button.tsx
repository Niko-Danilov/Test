import clsx from "clsx";
import { FC } from "react";
import { IButton } from "../../types/types.dto";
import styles from "./ui-button.module.scss";

const UiButton: FC<IButton> = ({ className, variant, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        {
          basket: styles.button,
          addItem: styles.buttonAdd,
          removeItem: styles.buttonRemove,
        }[variant]
      )}
    />
  );
};

export default UiButton;

import { FC } from "react";
import { IApp } from "./../../types/types.dto";
import styles from "./AppLayout.module.scss";

const AppLayout: FC<IApp> = ({ header, footer, children }) => {
  return (
    <div className={styles.wrapper}>
      {header}
      <main className={styles.wrapperMain}>{children}</main>
      {footer}
    </div>
  );
};

export default AppLayout;

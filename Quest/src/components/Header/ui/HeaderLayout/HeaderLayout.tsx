import { FC } from "react";
import { IHeader } from "./../../../../types/types.dto";
import styles from "./HeaderLayout.module.scss";

const HeaderLayout: FC<IHeader> = ({ addItem, basket, modal, list, open }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {addItem}
          <div className={styles.flex}>
            {basket}
            {open && list}
          </div>
          {modal}
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;

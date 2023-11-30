import { FC } from "react";
import { IHomeLayout } from "../../../../types/types.dto";
import UiCard from "../../../../ui/ui-card/ui-card";
import styles from "./HomeLayout.module.scss";

const HomeLayout: FC<IHomeLayout> = ({ massive, addToMarket }) => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          {massive
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((i) => (
              <li key={i.id} className={styles.item}>
                <UiCard key={i.id} i={i} onClick={addToMarket} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default HomeLayout;

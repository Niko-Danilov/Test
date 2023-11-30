import { FC } from "react";
import { IMarket } from "../../../../types/types.dto";
import UiMarketCard from "../../../../ui/ui-marketCard/ui-marketCard";
import styles from "./HeaderList.module.scss";

const HeaderList: FC<IMarket> = ({ mass, onClick }) => {
  return (
    <div className={styles.inner}>
      <ul className={styles.list}>
        {mass.length
          ? mass.map((i) => (
              <li key={i.id}>
                <UiMarketCard i={i} onClick={onClick} />
              </li>
            ))
          : "Товаров нет"}
      </ul>
    </div>
  );
};

export default HeaderList;

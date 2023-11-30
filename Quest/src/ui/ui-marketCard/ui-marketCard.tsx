import { FC } from "react";
import { ICardM } from "../../types/types.dto";
import UiButton from "../ui-button/ui-button";
import styles from "./ui-marketCard.module.scss";

const UiMarketCard: FC<ICardM> = ({ i, onClick }) => {
  return (
    <div className={styles.card}>
      <div>Название:{i.title}</div>
      <div>Категория:{i.category}</div>
      <div>Кол-во:{i.count}</div>
      <div>Цена:{i.price}</div>
      <UiButton variant="removeItem" onClick={() => onClick(i)}>
        Удалить
      </UiButton>
    </div>
  );
};

export default UiMarketCard;

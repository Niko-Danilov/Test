import { FC } from "react";
import { ICard } from "../../types/types.dto";
import UiButton from "../ui-button/ui-button";
import styles from "./ui-card.module.scss";

const UiCard: FC<ICard> = ({ i, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div>Название товара:{i.title}</div>
        <div>Категория:{i.category}</div>
        <div>Кол-во:{i.count}</div>
        <div>Цена:{i.price}</div>
      </div>
      <UiButton variant="addItem" onClick={() => onClick(i)}>
        Добавить в корзину
      </UiButton>
    </div>
  );
};

export default UiCard;

import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { IHeaderCreateItem } from "../../../../types/types.dto";
import UiButton from "../../../../ui/ui-button/ui-button";
import UiModal from "../../../../ui/ui-modal/ui-modal";
import UiTextField from "../../../../ui/ui-text-field/ui-text-field";
import styles from "./HeaderCreateItem.module.scss";

const HeaderCreateItem: FC<IHeaderCreateItem> = ({
  open,
  onClose,
  handleSubmit,
  onSubmit,
  register,
  errors,
}) => {
  return (
    <UiModal isOpen={open} onClose={onClose}>
      <h2 className={styles.title}>Добавление товара</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <UiTextField
          label="Название товара"
          error={errors?.title && "Такой название уже есть"}
          className={styles.id}
          inputProps={{
            ...register("id"),
            defaultValue: uuidv4(),
          }}
        />
        <UiTextField
          label="Название товара"
          error={errors?.title && "Такой название уже есть"}
          inputProps={{
            placeholder: "Введите название товара...",
            ...register("title"),
          }}
        />
        <UiTextField
          label="Категория"
          error={errors?.category && "Введите название категории"}
          inputProps={{
            placeholder: "Введите категорию товара...",
            ...register("category"),
          }}
        />
        <UiTextField
          label="Кол-во"
          error={errors?.count && "Введите число"}
          inputProps={{
            placeholder: "Введите кол-во товара...",
            ...register("count"),
          }}
        />
        <UiTextField
          label="Стоимость"
          error={errors?.price && "Введите число"}
          inputProps={{
            placeholder: "Введите стоимость товара...",
            ...register("price"),
          }}
        />
        <UiButton variant="addItem">Добавить</UiButton>
      </form>
    </UiModal>
  );
};

export default HeaderCreateItem;

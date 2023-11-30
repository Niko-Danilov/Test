import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SlBasket } from "react-icons/sl";
import { ZodType, z } from "zod";
import { useActions } from "../../hooks/useActions";
import { useMarket } from "../../hooks/useMarket";
import { useShowcase } from "../../hooks/useShowCase";
import { IItem } from "../../types/types.dto";
import UiButton from "../../ui/ui-button/ui-button";
import HeaderCreateItem from "./ui/HeaderCreateItem/HeaderCreateItem";
import HeaderLayout from "./ui/HeaderLayout/HeaderLayout";
import HeaderList from "./ui/HeaderList/HeaderList";

const Header: FC = () => {
  const [modalItem, setModalItem] = useState(false);
  const [list, setList] = useState(false);

  const handleList = () => {
    setList((prev) => !prev);
  };

  const handleModalCreate = (
    e?:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
      | React.BaseSyntheticEvent<HTMLFormElement>
  ) => {
    e?.preventDefault();
    setModalItem((prev) => !prev);
  };

  const { showcase } = useShowcase();

  const { market } = useMarket();

  type Schema = z.infer<typeof schema>;

  const schema: ZodType<IItem> = z.object({
    id: z.coerce.string(),
    title: z.coerce
      .string()
      .refine((value) => !showcase.some((i) => i.title === value), {
        message: "Уже существует",
      }),
    category: z.coerce.string(),
    count: z.coerce.number().positive(),
    price: z.coerce.number().positive(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Schema>({ mode: "onChange", resolver: zodResolver(schema) });

  const { addToMarket, deleteToMarket, addToShowCase } = useActions();

  const onSubmit: SubmitHandler<IItem> = (data) => {
    addToShowCase(data);
    reset();
  };

  return (
    <HeaderLayout
      open={list}
      addItem={
        <UiButton variant="addItem" onClick={handleModalCreate}>
          Добавить товар
        </UiButton>
      }
      basket={
        <UiButton variant="basket" onClick={handleList}>
          <SlBasket size={22} />
          {!!market?.length ? <p>{market.length}</p> : "0"}
        </UiButton>
      }
      modal={
        <HeaderCreateItem
          open={modalItem}
          onClose={handleModalCreate}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
          errors={errors}
        />
      }
      list={<HeaderList mass={market} onClick={deleteToMarket} />}
    />
  );
};

export default Header;

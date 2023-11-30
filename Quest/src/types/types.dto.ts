import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ButtonHTMLAttributes, InputHTMLAttributes, PropsWithRef } from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IApp {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export interface IHeader {
  addItem: React.ReactNode;
  basket: React.ReactNode;
  modal: React.ReactNode;
  list: React.ReactNode;
  open: boolean;
}
export interface ICard {
  i: IItem;
  onClick: ActionCreatorWithPayload<IItem, "market/addToMarket">;
}

export interface ICardM {
  i: IItem;
  onClick: ActionCreatorWithPayload<IItem, "market/deleteToMarket">;
}

export interface IItem {
  id: string;
  title: string;
  category: string;
  count: number;
  price: number;
}

export interface IHomeLayout {
  massive: IItem[];
  addToMarket: ActionCreatorWithPayload<IItem, "market/addToMarket">;
}

export interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: (
    e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
}

export interface IMarket {
  mass: IItem[];
  onClick: ActionCreatorWithPayload<IItem, "market/deleteToMarket">;
}

export interface IHeaderCreateItem {
  open: boolean;
  onClose: (
    e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  handleSubmit: UseFormHandleSubmit<IItem>;
  onSubmit: SubmitHandler<IItem>;
  register: UseFormRegister<IItem>;
  errors: FieldErrors<IItem>;
}

export type UiButtonVariant = "basket" | "addItem" | "removeItem";
export type IButton = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ITextField = {
  className?: string;
  error?: string;
  label?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

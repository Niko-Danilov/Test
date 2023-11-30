import { FC } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IModal } from "./../../types/types.dto";
import styles from "./ui-modal.module.scss";

const UiModal: FC<IModal> = ({ isOpen = false, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const Modal = (e.target as HTMLElement).closest("[data-id=modal]");
    if (Modal) return;
    onClose(e);
  };

  const modales = (
    <div className={styles.modal} onClick={handleClick}>
      <div className={styles.overlay} data-id="modal">
        {children}
        <button className={styles.button} onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
      </div>
    </div>
  );

  return document.getElementById("myModal")
    ? createPortal(modales, document.getElementById("myModal") as HTMLElement)
    : null;
};

export default UiModal;

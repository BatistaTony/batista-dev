import { OverlayModal } from "./styles";
import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return <OverlayModal>{children}</OverlayModal>;
};

export default Modal;

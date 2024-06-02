import { cn } from "@/lib/utils";

import { ReactNode } from "react";

type ModalProps = {
  className?: string;
  children: ReactNode;
};

const Modal = ({ className, children }: ModalProps) => {
  return (
    <main
      className={cn(
        "w-full fixed inset-0 z-10 flex items-center justify-center bg-opacity-25 backdrop-brightness-50",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Modal;

const Content = ({ className, children }: ModalProps) => {
  return <div className={cn("bg-white rounded-xl", className)}>{children}</div>;
};

Modal.Content = Content;

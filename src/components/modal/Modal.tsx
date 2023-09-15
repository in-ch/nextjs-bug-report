interface ModalProps {
  children: React.ReactNode;
  setShowModal: (value: boolean) => void;
}

export default function Modal({ children, setShowModal }: ModalProps) {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.target === e.currentTarget && setShowModal(false);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
      <div
        onClick={handleModalClick}
        className="modal-background fixed inset-0 bg-black opacity-10"
      ></div>
      <div className="modal-container bg-white min-w-min mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="modal-content p-4">{children}</div>
      </div>
    </div>
  );
}

import { useState } from 'react';

export const useModal = (open = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((state) => !state);

  return { isOpen, openModal, closeModal, toggleModal };
};

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import BookDemoModal from '../components/BookDemoModal';

const BookDemoModalContext = createContext(null);

export function BookDemoModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <BookDemoModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <BookDemoModal isOpen={isOpen} onClose={closeModal} />
    </BookDemoModalContext.Provider>
  );
}

export function useBookDemoModal() {
  const ctx = useContext(BookDemoModalContext);
  if (!ctx) {
    throw new Error('useBookDemoModal must be used within BookDemoModalProvider');
  }
  return ctx;
}

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-4xl',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#182536]/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className={`relative w-full ${maxWidth} max-h-[90vh] flex flex-col bg-[#1E293B] border-4 border-[#182536] shadow-[8px_8px_0px_#182536] overflow-hidden`}
      >
        {/* Modal Pixel Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#182536] border-b-4 border-[#334155]">
          <div className="flex items-center gap-2.5 truncate">
            <span className="w-3 h-3 bg-[#62B34D] inline-block shadow-[1px_1px_0px_#000]" />
            <h3 className="text-sm sm:text-base font-pixel text-[#F7F7F0] truncate">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#F7F7F0] hover:text-[#F5C84C] hover:bg-[#334155] border-2 border-transparent hover:border-[#F5C84C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C84C]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 text-[#F7F7F0]">
          {children}
        </div>
      </div>
    </div>
  );
};

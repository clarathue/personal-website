import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CalendlyButtonProps {
  className?: string;
  variant?: 'button' | 'link';
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({ 
  className = "text-tech-gray-700 hover:text-tech-blue",
  variant = 'link'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonContent = (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={variant === 'button' ? 'bg-tech-blue hover:bg-tech-darkBlue text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200' : className}
      >
        Termin vereinbaren
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              src="https://calendly.com/clara-oesm/30min"
              className="w-full h-full rounded-lg"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </>
  );

  return buttonContent;
};

export default CalendlyButton; 
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  whatsappLink: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  whatsappLink,
  size = 'medium',
  className = '',
}) => {
  const handleClick = (event: React.MouseEvent) => {
    // Prevent the default behavior of the link if needed
    event.preventDefault();

    // Validate WhatsApp link
    if (
      !whatsappLink.startsWith('https://wa.me/') &&
      !whatsappLink.startsWith('https://chat.whatsapp.com/')
    ) {
      alert('Invalid WhatsApp Link');
      return;
    }

    // Directly set the location to the WhatsApp link
    window.location.href = whatsappLink;
  };

  return (
    <a
      href={whatsappLink} // Fallback link if JavaScript is disabled
      onClick={handleClick} // Handle the click event for JavaScript functionality
      className={`inline-flex items-center ${sizeClasses[size]} bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors active:bg-green-700 ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      <span>Join WhatsApp</span>
    </a>
  );
};

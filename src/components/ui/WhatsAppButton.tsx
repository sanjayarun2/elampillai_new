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
    // Ensure the link is valid
    if (!whatsappLink.startsWith('https://wa.me/') && !whatsappLink.startsWith('https://chat.whatsapp.com/')) {
      event.preventDefault();
      alert('Invalid WhatsApp Link');
      return;
    }

    // Mobile redirection logic
    try {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // For mobile devices, redirect directly to WhatsApp
        window.location.href = whatsappLink;  // This should directly open the app
      } else {
        // For desktop, open WhatsApp link in a new tab
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      console.error('Error opening WhatsApp link:', error);
      alert('Could not open WhatsApp link');
    }
  };

  return (
    <a
      href={whatsappLink}
      onClick={handleClick} // Trigger the handleClick function when the link is clicked
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center ${sizeClasses[size]} bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors active:bg-green-700 ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      <span>Join WhatsApp</span>
    </a>
  );
};

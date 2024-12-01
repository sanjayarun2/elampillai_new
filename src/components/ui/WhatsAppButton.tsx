// components/ui/WhatsAppButton.tsx

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useSettings } from '../../context/SettingsContext'; // Import the context to get whatsappLink

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

interface WhatsAppButtonProps {
  showText: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  showText = true, // default to true
  size = 'medium',
  className = '',
}) => {
  const { whatsappLink } = useSettings(); // Get the WhatsApp link from the context

  const handleClick = (event: React.MouseEvent) => {
    // Validate WhatsApp link format
    if (!whatsappLink.startsWith('https://wa.me/') && !whatsappLink.startsWith('https://chat.whatsapp.com/')) {
      event.preventDefault();
      alert('Invalid WhatsApp Link');
      return;
    }

    // Open WhatsApp
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = whatsappLink; // Mobile devices will try to open the app directly
    } else {
      window.open(whatsappLink, '_blank', 'noopener,noreferrer'); // Desktop will open the link in a new tab
    }
  };

  return (
    <a
      href={whatsappLink}
      onClick={handleClick}
      className={`inline-flex items-center ${sizeClasses[size]} bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors active:bg-green-700 ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      {showText && <span>Join WhatsApp</span>}
    </a>
  );
};

// Default export
export default WhatsAppButton;

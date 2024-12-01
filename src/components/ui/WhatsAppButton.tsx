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
    // Validate WhatsApp link format
    if (!whatsappLink.startsWith('https://wa.me/') && !whatsappLink.startsWith('https://chat.whatsapp.com/')) {
      event.preventDefault();
      alert('Invalid WhatsApp Link');
      return;
    }

    // Check if the device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // For mobile: Use `window.location.href` to trigger the WhatsApp app
    if (isMobile) {
      const whatsappUrl = `https://wa.me/${whatsappLink.split('https://wa.me/')[1]}`;
      window.location.href = whatsappUrl;  // This should open WhatsApp on mobile
    } else {
      // For desktop: Open in a new tab
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <a
      href={whatsappLink} // Standard anchor href for fallback or desktop
      onClick={handleClick} // Custom behavior on click
      target="_blank" // Desktop opens in a new tab
      rel="noopener noreferrer"
      className={`inline-flex items-center ${sizeClasses[size]} bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors active:bg-green-700 ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      <span>Join WhatsApp</span>
    </a>
  );
};

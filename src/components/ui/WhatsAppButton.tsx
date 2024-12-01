import React from 'react';

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
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Check if the link starts with the proper WhatsApp URL format
    if (!whatsappLink.startsWith('https://wa.me/') && !whatsappLink.startsWith('https://chat.whatsapp.com/')) {
      event.preventDefault();
      alert('Invalid WhatsApp Link');
      return;
    }

    // Redirect to WhatsApp directly on mobile
    window.location.href = whatsappLink;
  };

  return (
    <a
      href={whatsappLink}
      onClick={handleClick} // Handle the click event to trigger the redirection
      className={`inline-flex items-center ${sizeClasses[size]} bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors active:bg-green-700 ${className}`}
    >
      <span>WhatsApp</span>
    </a>
  );
};

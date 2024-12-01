import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useSettings } from '../../context/SettingsContext';

interface WhatsAppButtonProps {
  className?: string;
  showText?: boolean;
}

export default function WhatsAppButton({ className = '', showText = true }: WhatsAppButtonProps) {
  const { whatsappLink } = useSettings();
  if (!whatsappLink) return null;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors active:bg-green-700 text-xs ${className}`}
    >
      <MessageCircle className="h-4 w-4 mr-1" />
      {showText && (
        <span className="truncate max-w-[200px]">சமூகம் | Community</span>
      )}
    </a>
  );
}
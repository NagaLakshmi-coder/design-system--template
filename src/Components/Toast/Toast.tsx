import React, { useEffect } from 'react';
import './toast.css'; // optional for styles

type ToastProps = {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number; // in ms
  onClose: () => void;
};

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`toast toast-${type}`} role="alert">
      {message}
    </div>
  );
};

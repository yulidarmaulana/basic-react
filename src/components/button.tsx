import React, { ButtonHTMLAttributes, ReactNode } from 'react';

// Definisikan properti yang diterima oleh komponen Tombol
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Node Reaksi untuk isi tombol
  variant?: 'primary' | 'secondary'; // Jenis varian tombol
}

// Komponen tombol
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  let buttonClass = 'relative overflow-hidden rounded-full bg-astral-500 dark:bg-astral-100 dark:text-slate-800 px-5 py-2.5 text-white font-medium duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90';
  if (variant === 'primary') {
    buttonClass += ' btn-primary';
  } else if (variant === 'secondary') {
    buttonClass += ' btn-secondary';
  }

  return (
    <>
    <button className={buttonClass} {...rest}>{children}</button>
    </>
  );
};

export default Button;
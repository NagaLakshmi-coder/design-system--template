import React from 'react';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'p' | 'label' | 'caption' | 'helper';
  children: React.ReactNode;
  className?: string;
};

const baseClasses = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  p: 'text-base',
  label: 'text-sm font-medium',
  caption: 'text-xs',
  helper: 'text-xs text-gray-500',
};

export const Typography = ({ variant, children, className = '' }: TypographyProps) => {
  const Tag = variant === 'p' || variant === 'helper' ? 'p' : variant;
  return <Tag className={`${baseClasses[variant]} ${className}`}>{children}</Tag>;
};

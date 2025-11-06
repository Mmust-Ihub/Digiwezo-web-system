"use client";

import React, { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  type?: 'text' | 'tel' | 'email' | 'number';
  required?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = true,
  className = '',
}) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={name} className="text-sm font-medium text-gray-500 mb-1">
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 border border-primary rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
      required={required}
    />
  </div>
);

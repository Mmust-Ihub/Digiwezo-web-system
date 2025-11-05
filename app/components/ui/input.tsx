import { cn } from '@/lib/utils';
import * as React from 'react';

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, value, defaultValue, onChange, ...props }, ref) => {
  const isControlled = typeof onChange === 'function';

  const safeValue = value ?? '';
  const safeDefault = defaultValue ?? '';

  return (
    <input
      type={type}
      min={type === 'number' ? 0 : undefined}
      className={cn(
        'flex h-10 lg:h-12 w-full rounded-md text-custom-grey  bg-custom-white px-3 py-2 text-sm lg:text-md ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-custom-grey/50 focus:outline-none focus:ring-0 focus:border focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 lg:placeholder:text-md',
        className
      )}
      ref={ref}
      {...props}
      {...(isControlled
        ? { onChange, value: safeValue }
        : { defaultValue: safeDefault })}
    />
  );
});
Input.displayName = 'Input';

export { Input };

import * as React from 'react';

import { cn } from '../utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-[44px] w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-gray-200 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-800 sm:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

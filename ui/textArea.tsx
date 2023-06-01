import * as React from 'react';

import { cn } from '../utils';

export interface InputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
// extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex h-[44px] w-full border border-gray-900 bg-black px-3 py-2 text-gray-200 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-800 sm:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
TextArea.displayName = 'TextArea';

import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  );
};

type CardHeaderProps = {
  title?: string;
  action?: ReactNode;
};

export const CardHeader = ({ title, action }: CardHeaderProps) => {
  return (
    <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
      {title && <h3 className="text-lg font-medium">{title}</h3>}
      {action && <div>{action}</div>}
    </div>
  );
};

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return <div className={`p-4 ${className}`}>
    {children}
  </div>;
};
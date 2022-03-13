import type { FC } from 'react';

export const Cute: FC = ({ children }) => {
  return (
    <div className="tw">
      <div className="text-pink-500">{children}</div>
    </div>
  );
};

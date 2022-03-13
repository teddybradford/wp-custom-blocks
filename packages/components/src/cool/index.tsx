import type { FC } from 'react';

export const Cool: FC = ({ children }) => {
  return (
    <div className="tw">
      <div className="after:content-['_😎']">{children}</div>
    </div>
  );
};

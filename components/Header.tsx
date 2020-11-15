import React, { FC } from 'react';
import Switch from './commons/Switch';

const Header: FC = ({ children }) => {
  return (
    <div className="flex justify-between items-center">
      {children}
      <Switch />
    </div>
  );
};

export default Header;

import { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="layout">
      { children }
    </div>
  );
};

export default Layout;
import { FunctionComponent } from 'react';

import styles from './Layout.module.scss';

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;

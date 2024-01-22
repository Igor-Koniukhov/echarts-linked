import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from '@/styles/components/ui/NavBar.module.scss';
import NavLinks from '@/components/ui/navBar/NavLinks';

const NavBar: FunctionComponent = () => (
  <header className={classes.header}>
    <div className={classes['header-container']}>
      <div className={classes['header-content']}>
        <Link href="/" className={classes.logo}>
          <div className={classes['logo-img']}>
            <Image
              src="/images/logo.png"
              alt="logo"
              fill
            />
          </div>
        </Link>
        <NavLinks />
      </div>
    </div>
  </header>
);

export default NavBar;

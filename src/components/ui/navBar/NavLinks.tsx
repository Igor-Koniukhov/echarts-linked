'use client'
import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NAVIGATION_PARAMS } from '@/utils/navs/constants';
import classes from '@/styles/components/ui/NavBar.module.scss';

const NavLinks: FunctionComponent = () => {
  const router = useRouter();

  return (
    <nav className={classes.nav}>
      <ul className={classes['nav-list']}>
        {NAVIGATION_PARAMS(
        ).map((item) => (
          <li
            className={`${classes['nav-item']} `}
            key={item.name}
          >
            {' '}
            <Link
              className={classes['nav-link']}
              href={item.href}
            >{item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import classes from '@/styles/components/ui/NavBar.module.scss';

const ProfileLink: FunctionComponent = () => (
  <div className={classes['trading-badge']}>
    <Link className={classes['trading-link']} href="/profile">Trading Activity</Link>
  </div>
);

export default ProfileLink;

import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import classes from '@/styles/components/ui/NavBar.module.scss';
import { AccountProps } from '@/utils/hooks/types';
import { reduceAddressLength } from '@/utils/navs';

const WalletAccount: FunctionComponent<AccountProps> = ({ accountAddress }) => (
  <div className={classes.account}>
    <div className={classes['account-image']}>
      <Image src="/images/metamask-fox.svg" alt="MetaMask icon" fill />
    </div>
    <div className={classes['account-badge']}>{reduceAddressLength(accountAddress!)}</div>
  </div>
);

export default WalletAccount;

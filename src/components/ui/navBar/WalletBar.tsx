import React, { FunctionComponent } from 'react';
import classes from '@/styles/components/ui/NavBar.module.scss';
import WalletAccount from './WalletAccount';
import ProfileLink from '@/components/ui/navBar/ProfileLink';
import useWalletStatus from '@/components/hooks/useWalletStatus';
import {
  CONNECT_MSG,
  SWITCH_MSG,
  INSTALL_WALLET_MSG,
  ALREADY_IN_PROCESS_MSG,
} from '@/utils/wallets/constants';
import InstallWalletPopUp from '@/components/ui/popups/InstallWalletPopUp';
import ConnectWalletButton from '@/components/ui/buttons/ConnectWalletButton';
import useConnectWalletMethods from '@/components/hooks/useConnectWalletMethods';

const WalletBar: FunctionComponent = () => {
  const {
    accountAddress,
    isLoaded,
    isWalletExistAndConnected,
    isSwitchCondition,
    isSignedIn,
    isWallet,
  } = useWalletStatus();

  const {
    isActive,
    handleConnectWallet,
    handleSwitchNetwork,
    setActivePopUp,
  } = useConnectWalletMethods();

  return (
    <div>
      {isLoaded && (
        <div className={classes['bar-wrapper']}>
          {isSignedIn && (
          <>
            <WalletAccount {...{ accountAddress }} />
            <ProfileLink />
          </>
          )}
          {isWalletExistAndConnected ? (
            isSwitchCondition && (
              <ConnectWalletButton onClick={handleSwitchNetwork}>
                {SWITCH_MSG}
              </ConnectWalletButton>
            )
          ) : (
            <ConnectWalletButton onClick={handleConnectWallet}>
              {CONNECT_MSG}
            </ConnectWalletButton>
          )}
        </div>
      )}
      {isActive && (
      <InstallWalletPopUp
        setActivePopUp={setActivePopUp}
        message={isWallet ? ALREADY_IN_PROCESS_MSG : INSTALL_WALLET_MSG}
        isWallet={isWallet}
      />
      )}
    </div>
  );
};

export default WalletBar;

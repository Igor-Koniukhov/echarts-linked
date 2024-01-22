export const setPathClass = (asPath: string, href: string): string => (
  asPath.split('/')[1] === href.split('/')[1] ? 'is-active' : '');

export const reduceAddressLength = (address: string) => {
  if (!address) {
    return ('account undefined');
  }

  return `0x${address.slice(2, 6)}...${address.slice(-4)}`;
};

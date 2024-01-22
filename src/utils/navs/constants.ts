// eslint-disable-next-line import/prefer-default-export
export const Chart = '/';
export const CANDLE_CHART = '/candlechart';
export const TREE_D = '/ThreeDExample'
export const NAVIGATION_PARAMS = () => ([
  { name: 'Chart', href: Chart, current: true },
  { name: 'Candle Chart', href: CANDLE_CHART, current: false },
  { name: '3D example', href: TREE_D, current: false },
]);

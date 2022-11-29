import { atom } from 'recoil';

const pageState = atom({
  key: 'pageState',
  default: false,
});

export { pageState };

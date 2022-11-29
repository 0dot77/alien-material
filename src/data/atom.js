import { atom } from 'recoil';

const pageState = atom({
  key: 'pageState',
  default: true,
});

export { pageState };

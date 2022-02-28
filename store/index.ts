import { atom, selector } from 'recoil';

export const intialState = atom({
  key: 'switch-tab',
  default: 'planets'
});

export const selectorStringTab = selector({
  key: 'container-size',
  get: ({ get }) => {
    // getting the count of the store
    const strSwitch = get(intialState);

    return strSwitch;
  }
});

import { atom } from 'recoil'

export const userTokenStateAtom = atom({
  key: 'userTokenStateAtom',
  default: '',
})

export const productStateAtom = atom({
  key: 'userStateAtom',
  default: {},
})

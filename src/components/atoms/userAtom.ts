import { atomWithStorage } from 'jotai/utils'


export const userAtom = atomWithStorage("users",  []);
export const currentUserAtom = atomWithStorage("loginUser", null, localStorage, {
    getOnInit:true
})
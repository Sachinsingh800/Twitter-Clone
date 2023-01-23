import { atom } from "recoil";



export const isUserLoggedInAtom  = atom({
    key : 'isUserLoggedIn' ,
    default : false
})


// export default function ProfilePage () {
//     const profile = useRecoilValue(profileDataAtom)
//     console.log({profile})
//     return(
//         <h1>Welcome to the profile page</h1>
//     )
// }
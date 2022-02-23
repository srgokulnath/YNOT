import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import * as Google from 'expo-google-app-auth';
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signout,
} from "@firebase/auth"
import { auth } from '../firebase';


const AuthContext = createContext({})

const config = {
    androidClientId: '306200310044-l0qjan5r897t7j2ddg9brl9kq8impbug.apps.googleusercontent.com',
    iosClientId: '306200310044-ut73dilfb53btm077n4o2pcla0glgg6h.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: [ "public_profile", "email", "gender", "location"]
}

export const AuthProvider = ({ children }) => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(()=>
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            } else{
                setUser(null);
            }

            setLoadingInitial(false)
        }),
    [])

    const logout = ()=> {
        setLoading(true);

        signout(auth).catch((error)=>setError(error)).finally(()=>setLoading(false));
    }

    const signInWithGoogle = async () => {
        setLoading = true;
        await Google.logInAsync(config).then(
            async(logInResult) =>{
                if(logInResult.type === "seccess"){
                    const { idToken, accessToken} = logInResult;
                    const credential = GoogleAuthProvider.credential(idToken, accessToken);
                    await signInWithCredential(auth,credential);                
                }
                return Promise.reject();
            }
        ).catch(error =>setError(error))
        .finally(() => setLoading(false));
    }

    return (
        <AuthContext.Provider value={{
            user: user,
            loading,
            error,
            logout,
            signInWithGoogle,
        }}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){
    return useContext(AuthContext);
}

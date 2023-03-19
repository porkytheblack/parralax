import { auth } from "@app-firebase/index";
import { github_client_id, github_client_secret } from "@env";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { maybeCompleteAuthSession } from "expo-web-browser"
import { GithubAuthProvider, signInWithCredential, signOut } from "firebase/auth";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";


maybeCompleteAuthSession()

const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: `https://github.com/settings/connections/applications/${github_client_id}`,
  };


  async function createTokenWithCode(code: string) {
    const url =
      `https://github.com/login/oauth/access_token` +
      `?client_id=${github_client_id}` +
      `&client_secret=${github_client_secret}` +
      `&code=${code}`;
    
    const _res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res)=>res.json()).then((res)=>{
      return res
    }).catch((e)=>{
      console.log('An error occured', e)
      return null
    })
    console.log("Here is the res::", _res)
    return _res
  }

function useAuth() {
    const [feedback, setFeedback] = useState<{error: any, loading: boolean}>({
        error: null,
        loading: false
    })
    const [ request, response, promptAsync ] = useAuthRequest({
        clientId: github_client_id,
        scopes: ['user'],
        redirectUri: makeRedirectUri({
            scheme: "parralax",
        })
    }, discovery)


    useEffect(() => {
        if (isEmpty(response)) return
        if (response?.type === 'success') {
          const { code } = response.params;
          createTokenWithCode(code).then((res)=>{
            const { access_token } = res
            const credential = GithubAuthProvider.credential(access_token)
            setFeedback((prev)=>({
                  ...prev,
                  loading: true
            }))
            signInWithCredential(auth, credential).then((user)=>{
              setFeedback((prev)=>({
                  ...prev,
                  error: null,
                  loading: false
              })) 
            }).catch((e)=>{
              setFeedback((prev)=>({
                  ...prev,
                  error: e,
                  loading: false
              }))
            })
          }).catch((e)=>{
            console.log('An error occured', e)
            setFeedback((prev)=>({
                ...prev,
                error: e,
                loading: false
            }))
          })
          
        }
      }, [response]);

    return {
        feedback,
        promptAsync
    }
}

export default useAuth
import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { API } from '@utils/constants'
import React, { useMemo, useState } from 'react'
import { trpc } from '.'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import app from '@app-firebase/index'

interface IProps {
    children: React.ReactNode
}

function TrpcApp(props: IProps) {
    const [user, setUser] = useState<User|null>(null)
    onAuthStateChanged(getAuth(app), (user)=>{
        setUser(user)
    })
    const token = useMemo(()=>{
        return user?.getIdToken()
    }, [user])
    const [queryClient] = useState(()=>new QueryClient())
    const [trpcClient] = useState(()=>trpc.createClient({
        links: [
            httpBatchLink({
                url: API,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
        ]
    }))

    

  
  return (
    <trpc.Provider
        client={trpcClient}
        queryClient={queryClient}
    >
        {
            props.children
        }
    </trpc.Provider>
  )
}

export default TrpcApp
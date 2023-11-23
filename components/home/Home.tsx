'use client'

import { useStoreDispatch, useStoreSelector } from "@/hooks/useStore";
import {
    logoutUser,
    storedCollections,
    storedUser
} from "@/store/slices/auth";

import { useEffect } from "react";
import { toast } from "../ui/use-toast";

export default function Home() {

    const user = useStoreSelector(storedUser);
    const collections = useStoreSelector(storedCollections)

    const dispatch = useStoreDispatch()

    useEffect(() => {
        if (!user) {
            dispatch(logoutUser())
            toast({
                title: "Your session expired.",
                description: "Please log in again.",
                variant: "destructive",
            })
            if (typeof window !== 'undefined') {
                window.location.href = "/auth/login"
            }
        }
    }, [user, dispatch])

    return (
        <>
            NextJS + Directus Multi Tenancy Starter 
        </>
    )
}
import React, {useEffect, useState} from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux'
import './LoadingBar.css';

export const LoadingBar = () => {

    const { barLoading } = useSelector(state => state.ui)

    let [loadingInterval,setLoadingInterval] = useState(null);
    let [loadingOut,setLoadingOut] = useState(null);
    let [isLoading, setIsLoading] = useState(false);

    const loadingStart = () => {
        setLoadingOut(null)
        if(loadingInterval!=null){
            clearTimeout(loadingInterval);
        }
        setLoadingInterval(null);
        setIsLoading(true);
    }

    const loadingEnd = () => {
        setLoadingOut('out')
        loadingInterval = setTimeout(() => {
            loadingInterval = null;
            setIsLoading(false);
        }, 500);
        setLoadingInterval(loadingInterval)
    }

    useEffect(() => {
        if (barLoading) {
            loadingStart()
        } else {
            loadingEnd()
        }
    }, [barLoading])


    return (
        <Fragment>
            {
                isLoading && 
                <div className={`Loading ${loadingOut !== null ? ' out' : ''}`}/>
            }
        </Fragment>
    )
}

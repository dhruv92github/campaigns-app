import React from 'react'
import AppHeader from './AppHeader'
import { Route } from 'react-router-dom'; 
import '../css/App.scss'

 const AppLayout =({children})=> {
   
        return (
            <div>
                <AppHeader/>
                <div className="app-body container">
                    {children}
                </div>
            </div>
        )
    }

const AppLayoutRoute=({component:Component,...rest})=>{
    return(
        <Route {...rest} render={
            (matchProps)=>(
                <AppLayout>
                    <Component {...matchProps} />
                </AppLayout>
            )
        }  />
    )
}
export default AppLayoutRoute;

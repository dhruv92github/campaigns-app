import React from 'react'
import { Link } from "react-router-dom";
import bluestacks_logo from '../images/bluestacks_logo.png'
import '../css/header.scss'

export default function AppHeader() {
    return (
        <div className='app-header '>
            <div className='brand container'>
                <div className='brand-logo'>
                <img src={bluestacks_logo} alt='bluestacks_logo' />
                </div>
                <div className='brand-text'>
                    <span id='blue'>BlueStacks</span>
                    <span id='play'>Play Bigger</span>
                </div>
           
            </div>
           
           
        </div>
    )
}

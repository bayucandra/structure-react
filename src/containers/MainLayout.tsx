import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { PageFooter } from '../shared/components/page-footer';
import { PageHeader } from '../shared/components/page-header';
// import { BallTriangle } from 'react-loader-spinner'


export function MainLayout() {
    const [state, setState] = useState({
        isFirebaseAuthenticated: false
    });


    return <>
        <PageHeader/>

        <Outlet/>

        <PageFooter/>
    </>
}
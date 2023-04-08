import type { NextFetchEvent, NextRequest } from "next/server";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
import {protectedRoutes, publicRoutes} from "./helpers/routes";

export default async function middleware(req : NextRequest, res : NextResponse){
    const APP_URL = process.env.NODE_ENV == 'production' ? process.env.APP_URL : 'http://localhost:3000';

    if (req.nextUrl.pathname.startsWith('/_next') || req.nextUrl.pathname.startsWith('/api') || req.nextUrl.pathname.startsWith('/favicon') || req.nextUrl.pathname.startsWith('/_error') || req.nextUrl.pathname.startsWith('/404')){
        return NextResponse.next();        
    }

    // undefined routes (404) handler, to disable middleware on 404 (deadlock redirect)
    if (!publicRoutes.includes(req.nextUrl.pathname) && !protectedRoutes.includes(req.nextUrl.pathname)){
        return NextResponse.redirect(new URL('/', req.url))
    }

    const { cookies } = req;
    const jwt = cookies.get('token')?.value || '';


    const response = await fetch(APP_URL + '/api/middleware/auth', {
        headers : {
            Authorization : 'Bearer ' + jwt
        }
    });

    const data = await response.json();
    
    if (data.code === 401){ // Has invalid token
        if (protectedRoutes.includes(req.nextUrl.pathname)){
            return NextResponse.redirect(new URL('/loginwisanggeniadmin', req.url))
        }
        return;
    } 

    // Redirect from login and register page if authenticated
    if (req.nextUrl.pathname == '/loginwisanggeniadmin' || req.nextUrl.pathname == '/register'){
        return NextResponse.redirect(new URL('/', req.url));        
    }



    return NextResponse.next();
}

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico|Assets).*)',
    ],
  }
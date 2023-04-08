import type { NextFetchEvent, NextRequest } from "next/server";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
import protectedRoutes from "./helpers/routes";

export default async function middleware(req : NextRequest, res : NextResponse){
 
    if (req.nextUrl.pathname.startsWith('/_next')){
        return NextResponse.next();        
    }

    const { cookies } = req;
    const jwt = cookies.get('token')?.value || '';


    const response = await fetch('http://localhost:3000/api/middleware/auth', {
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
        return NextResponse.redirect(new URL('/', req.url))        
    }

    return NextResponse.next();
}

export const config = { matcher: "/((?!.*\\.|api\\/).*)" };
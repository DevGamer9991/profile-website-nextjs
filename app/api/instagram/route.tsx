import { NextResponse } from 'next/server';

export async function GET() {

    const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

    return NextResponse.json({INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_USER_ID});
}
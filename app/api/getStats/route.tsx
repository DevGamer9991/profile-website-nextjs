import { query } from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const result = await query('SELECT * FROM stats');
        return NextResponse.json({result})
    } catch (error) {
        return NextResponse.json({ error: `Error Getting Database: ${error}` }, { status: 500 });
    }
}
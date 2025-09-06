import { query } from '../../../lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const result = await query('SELECT * FROM stats WHERE stat_date = CURRENT_DATE');
        
        if (result.rows.length === 0) {
            return NextResponse.json({ stat_date: new Date().toISOString().split('T')[0], total_users: 0, total_orders: 0, total_revenue: 0 });
        }

        var data = result.rows[0];

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: `Error Getting Database: ${error}` }, { status: 500 });
    }
}
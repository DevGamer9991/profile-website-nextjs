import { query } from '../../../lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST() {
    try {
        const result = await query('UPDATE stats SET page_views = page_views + 1 WHERE stat_date = CURRENT_DATE RETURNING *');

        if (result.rows.length === 0) {
            // add a new row with current date and one page view
            await query('INSERT INTO stats (stat_date, page_views, created_at) VALUES (CURRENT_DATE, 1, NOW())');
            return NextResponse.json({ stat_date: new Date().toISOString().split('T')[0], page_views: 1 });
        }

        var data = result.rows[0];
        
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: `Error Getting Database: ${error}` }, { status: 500 });
    }
}
import { NextResponse } from 'next/server';

export async function GET() {

    const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!INSTAGRAM_USER_ID || !INSTAGRAM_ACCESS_TOKEN) {
        return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 });
    }

    // If everything is valid, get the media on the Instagram account
    const mediaResponse = await fetch(`https://graph.instagram.com/v23.0/${INSTAGRAM_USER_ID}/media?fields=like_count,media_type,media_url,owner,permalink,username,timestamp,view_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`);

    if (!mediaResponse.ok) {
        return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
    }

    const mediaData = await mediaResponse.json();
    if (!mediaData.data || mediaData.data.length === 0) {
        return NextResponse.json({ error: 'No media found' }, { status: 404 });
    }

    // remove any media that is not an image or carousel
    mediaData.data = mediaData.data.filter((media) => media.media_type === 'IMAGE' || media.media_type === 'CAROUSEL_ALBUM');

    return NextResponse.json(mediaData.data, { status: 200 });
}
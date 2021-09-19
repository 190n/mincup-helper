export async function getTweetsFromHashtag(hashtag: string, excludeHashtag?: string): Promise<{ data: any }> {
    let query = `#${hashtag} -is:retweet`;
    if (typeof excludeHashtag == 'string') {
        query += ` -#${excludeHashtag}`;
    }

    const res = await fetch(
        'https://api.twitter.com/2/tweets/search/recent'
            + `?query=${encodeURIComponent(query)}`
            + '&expansions=author_id,attachments.media_keys',
        {
            headers: {
                Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
            },
        },
    );

    const json = await res.json();

    return json;
}

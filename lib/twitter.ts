export interface Tweet {
    text: string;
    id: string;
    username: string;
    name: string;
    date: string;
    images?: string[];
}

export async function getTweetsFromHashtag(hashtag: string): Promise<Tweet[]> {
    const query = `#${hashtag} -is:retweet`;

    const res = await fetch(
        'https://api.twitter.com/2/tweets/search/recent'
            + `?query=${encodeURIComponent(query)}`
            + '&expansions=author_id,attachments.media_keys'
            + '&tweet.fields=created_at&media.fields=url',
        {
            headers: {
                Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
            },
        },
    );

    const json = await res.json(), tweets: Tweet[] = [];
    console.log(json.includes.media);

    for (const t of json.data) {
        const author = json.includes.users.find(u => u.id == t.author_id);
        const tweet: Tweet = {
            text: t.text,
            id: t.id,
            username: author.username,
            name: author.name,
            date: t.created_at,
        };

        if (t.attachments?.media_keys) {
            tweet.images = [];
            for (const key of t.attachments.media_keys) {
                const media = json.includes.media.find(m => m.media_key == key);
                if (media.url) {
                    tweet.images.push(media.url);
                }
            }
        }

        tweets.push(tweet);
    }

    return tweets;
}

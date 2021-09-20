export interface Tweet {
    text: string;
    id: string;
    username: string;
    name: string;
    date: string;
}

export async function getTweetsFromHashtag(hashtag: string): Promise<Tweet[]> {
    const query = `#${hashtag} -is:retweet`;

    const res = await fetch(
        'https://api.twitter.com/2/tweets/search/recent'
            + `?query=${encodeURIComponent(query)}`
            + '&expansions=author_id'
            + '&tweet.fields=entities,created_at',
        {
            headers: {
                Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
            },
        },
    );

    const json = await res.json(), tweets: Tweet[] = [];

    for (const t of json.data) {
        const author = json.includes.users.find(u => u.id == t.author_id);
        const tweet = {
            text: t.text,
            id: t.id,
            username: author.username,
            name: author.name,
            date: t.created_at,
        };

        tweets.push(tweet);
    }

    return tweets;
}

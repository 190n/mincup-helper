import type { NextPage } from 'next';

import { getTweetsFromHashtag, Tweet } from '../lib/twitter';
import TweetCard from '../components/TweetCard';
import { getCurrentCompetition } from '../lib/competitions';

export interface HomeProps {
    date: string;
    min1: string;
    min2: string;
    min1Tweets: Tweet[];
    min2Tweets: Tweet[];
}

const Home: NextPage<HomeProps> = ({ date, min1, min2, min1Tweets, min2Tweets }) => (
    <>
        <h1 className="title is-1">Mineral Cup: {date}</h1>
        <div className="columns">
            <div className="column">
                <h1>{min1}</h1>
                {min1Tweets.map(t => <TweetCard tweet={t} key={t.id} />)}
            </div>
            <div className="column">
                <h1>{min2}</h1>
                {min2Tweets.map(t => <TweetCard tweet={t} key={t.id} />)}
            </div>
        </div>
    </>
);

export default Home;

export async function getStaticProps(): Promise<{ props: HomeProps }> {
    const { date: dateObject, minerals, hashtags } = getCurrentCompetition(new Date()),
        date = `${dateObject.getUTCMonth() + 1}-${dateObject.getUTCDate()}`,
        [min1, min2] = minerals,
        [min1Tweets, min2Tweets] = await Promise.all([
            getTweetsFromHashtag(hashtags?.[0] ?? min1),
            getTweetsFromHashtag(hashtags?.[1] ?? min2),
        ]);

    return { props: { date, min1, min2, min1Tweets, min2Tweets } };
}

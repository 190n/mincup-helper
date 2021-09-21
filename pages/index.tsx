import type { NextPage } from 'next';

import { getTweetsFromHashtag, Tweet } from '../lib/twitter';
import TweetCard from '../components/TweetCard';

export interface HomeProps {
    tweets: Tweet[];
}

const Home: NextPage<HomeProps> = (props) => (
    <>
        <h1 className="title is-1">MinCup Helper</h1>
        {props.tweets.map(t => <TweetCard tweet={t} key={t.id} />)}
    </>
);

export default Home;

export async function getStaticProps() {
    return { props: { tweets: await getTweetsFromHashtag('Cinnabar') } };
}

import type { NextPage } from 'next';

import { getTweetsFromHashtag } from '../lib/twitter';

const Home: NextPage<any> = (props) => (
    <>
        <h1 className="title is-1">MinCup Helper</h1>
        {JSON.stringify(props)}
        {/* {props.data.map((tweet, i) => (
            <div className="card block" key={i}>
                <div className="card-content">
                    {tweet.text}
                </div>
            </div>
        ))} */}
    </>
);

export default Home;

export async function getStaticProps() {
    return { props: await getTweetsFromHashtag('Malachite') };
}

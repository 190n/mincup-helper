import type { NextPage } from 'next';

const Home: NextPage<{ data: any[] }> = (props) => (
    <>
        <h1 className="title is-1">MinCup Helper</h1>
        {props.data.map((tweet, i) => (
            <div className="card block" key={i}>
                <div className="card-content">
                    {tweet.text}
                </div>
            </div>
        ))}
    </>
);

export default Home;

export async function getStaticProps() {
    const res = await fetch('https://api.twitter.com/2/tweets/search/recent?query=%23Torbernite', {
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
        },
    });
    const data = await res.json();

    return {
        props: data,
    };
}

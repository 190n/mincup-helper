import React from 'react';
import { Tweet } from '../lib/twitter';

export interface TweetCardProps {
    tweet: Tweet;
}

const ExternalLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" rel="noopener noreferrer" {...props} />
);

export default function TweetCard({ tweet }: TweetCardProps) {
    return (
        <div className="card block">
            <div className="card-content">
                <h1 className="is-size-4">
                    <ExternalLink href={`https://twitter.com/${tweet.username}`}>
                        {tweet.name} @{tweet.username}
                    </ExternalLink>
                </h1>
                <p>{tweet.text}</p>
                <ExternalLink href={`https://twitter.com/i/status/${tweet.id}`}>
                    {new Date(tweet.date).toLocaleString()}
                </ExternalLink>
            </div>
            {tweet.images && (
                <div className="card-image">
                    <figure className="image">
                        <img src={tweet.images[0]} />
                    </figure>
                </div>
            )}
        </div>
    );
}

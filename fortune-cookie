// pages/api/fortune.js
import sdk from '@farcaster/frame-sdk';

const fortunes = [
    "The mempool is on your side. Move accordingly.",
    "You’re early. The exit liquidity isn’t here yet.",
    "Code is law. Play by the rules you write.",
    "Your next block is already written. Stack wisely.",
    "Liquidity is a mirage. Stay solvent.",
    "Decentralization is a spectrum. Choose your trust wisely.",
    "Blocks don’t wait. Neither should you.",
    "The best trades aren’t on the timeline.",
    "There are no free lunches, only asymmetric bets.",
    "Hold conviction, not bags."
];

export default function handler(req, res) {
    if (req.method === 'POST') {
        sdk.actions.ready();
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        res.status(200).json({ message: randomFortune });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(`
            <html>
                <head>
                    <meta property="og:title" content="Farcaster Fortune Cookie" />
                    <meta property="og:description" content="Click to reveal your on-chain fate." />
                    <meta property="fc:frame" content="vNext" />
                    <meta property="fc:frame:button:1" content="Reveal Fate" />
                    <meta property="fc:frame:post_url" content="https://your-vercel-project.vercel.app/api/fortune" />
                </head>
                <body></body>
            </html>
        `);
    }
}

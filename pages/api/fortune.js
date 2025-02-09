// pages/api/fortune.js

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
    try {
        console.log("Request received:", req.method);

        if (req.method === 'GET') {
            console.log("GET request successful.");
            res.setHeader("Content-Type", "text/html"); // Make sure Warpcast detects this
            return res.status(200).send(`
                <html>
                    <head>
                        <meta property="og:title" content="Farcaster Fortune Cookie" />
                        <meta property="og:description" content="Click to reveal your on-chain fate." />
                        <meta property="fc:frame" content="vNext" />
                        <meta property="fc:frame:button:1" content="Reveal Fate" />
                        <meta property="fc:frame:post_url" content="https://farcaster-frame-livid.vercel.app/api/fortune" />
                    </head>
                    <body>
                        <div style="text-align: center; padding: 50px;">
                            <h1>🔮 Farcaster Fortune Cookie</h1>
                            <p>Click the button in Farcaster to reveal your on-chain fate.</p>
                            <p>If you see this page, your Frame metadata is working!</p>
                        </div>
                    </body>
                </html>
            `);
        } 
        
        if (req.method === 'POST') {
            const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            console.log("POST request successful. Fortune:", randomFortune);
            return res.status(200).json({ message: randomFortune });
        } 
        
        console.log("Invalid method:", req.method);
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ error: "Method not allowed" });

    } catch (error) {
        console.error("🔥 ERROR in API:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
}

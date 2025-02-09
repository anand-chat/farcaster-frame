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
            return res.status(200).json({ status: "API is working!", exampleFortune: fortunes[0] });
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

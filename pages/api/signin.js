
export default async function signin(req, res) {
    try {
        // Check if the request method is POST
        if (req.method === 'POST') {
            const { username, password } = req.body;
            
            // Validate username and password
            if (username === process.env.inrainusername && password === process.env.inrainpassword) {
                return res.status(200).json({
                    success: true,
                    message: "Signin Successfully"
                });
            } else {
                return res.status(401).json({
                    success: false,
                    message: "Invalid credentials"
                });
            }
        } else {
            // Handle any non-POST requests
            res.setHeader('Allow', ['POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Ghost Proxy Engine
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const response = await fetch('https://agentrouter.org/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': req.headers.authorization,
                'User-Agent': 'claude-code/1.0.0 (Windows NT 10.0; Win64; x64)',
                'x-stainless-os': 'Windows',
                'x-stainless-arch': 'x64',
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify(req.body)
        });
        
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: { message: 'Ghost Proxy Connection Failed' } });
    }
                  }
  

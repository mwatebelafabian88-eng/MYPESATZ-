export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('GitHub Ping received:', req.body)
    return res.status(200).json({ received: true })
  }
  return res.status(405).end()
}
export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { paymentId, txid } = req.body;
  console.log("Completed:", paymentId, txid);
  res.status(200).json({ completed: true });
}

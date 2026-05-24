export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { paymentId } = req.body;
  console.log("Approved:", paymentId);
  res.status(200).json({ approved: true });
}

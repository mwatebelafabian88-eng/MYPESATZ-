export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  console.log("✅ Pi imekubali malipo!", req.body);
  const paymentId = req.body.data.payment.id;
  
  // Hapa weka paymentId kwenye DB kama "pending"
  
  return res.status(200).json({result: "approved"});
}
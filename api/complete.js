export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { paymentId, txid } = req.body;
  console.log('Kazi 2: Inakamilisha malipo ID:', paymentId, 'Tx:', txid);

  // Hapa unahifadhi kwenye database: paymentId, txid, status="completed"
  try {
    return res.status(200).json({ 
      success: true,
      message: 'Malipo yamekamilika',
      txid: txid
    });
  } catch (error) {
    console.error('Kosa la complete:', error);
    return res.status(500).json({ error: error.message });
  }
}
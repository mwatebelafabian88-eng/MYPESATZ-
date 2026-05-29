export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { paymentId } = req.body;
  console.log('Kazi 1: Inaandaa malipo ID:', paymentId);

  // Hapa unaweza kuhifadhi paymentId kwenye database yako
  // Kwa sasa tuiruhusu Pi iendelee
  try {
    return res.status(200).json({ 
      success: true,
      message: 'Malipo yameidhinishwa'
    });
  } catch (error) {
    console.error('Kosa la approve:', error);
    return res.status(500).json({ error: error.message });
  }
}
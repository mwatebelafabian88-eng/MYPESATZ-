export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { paymentId, txid } = req.body;
  console.log("✅ Pi COMPLETE:", paymentId, txid);

  // 1. JIBU PI KWANZA - sekunde 0.1. Hii ndio siri yote
  res.status(200).json({ 
    result: "completed", 
    txid: txid 
  });

  // 2. BAADA YA KUJIBU, sasa fanya kazi yako pole
  try {
    // Mfano: await prisma.payment.update({ where: { id: paymentId }, data: { status: 'COMPLETED', txid }})
    console.log("Imehifadhiwa DB:", paymentId);
  } catch (e) {
    console.error("Error baada ya kujibu:", e);
  }
}
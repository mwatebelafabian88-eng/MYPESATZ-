export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { payment } = req.body;
  const paymentId = payment?.id;
  
  console.log("✅ Pi APPROVE:", paymentId); // Log fupi tu

  // 1. JIBU PI KWANZA - sekunde 0.1
  res.status(200).json({ result: "approved" });

  // 2. BAADA YA KUJIBU, sasa fanya kazi yako
  try {
    // Mfano: await prisma.payment.create({ data: { id: paymentId, status: 'APPROVED' }})
    console.log("Imehifadhiwa DB:", paymentId);
  } catch (e) {
    console.error("Error DB:", e);
  }
}
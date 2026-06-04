export default async function handler(req, res) {
  // Pi Server inatuma POST tu. Kama mtu anafungua kwa browser tunakataa
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log("✅ Webhook ya COMPLETE imefika kutoka Pi!", req.body);
    
    const payment = req.body.data.payment;
    const paymentId = payment.identifier;
    const txid = payment.transaction?.txid;
    const amount = payment.amount;
    
    console.log("Payment ID:", paymentId);
    console.log("TXID:", txid);
    console.log("Amount:", amount, "test-Pi");

    // HAPA WEKA LOGIC YAKO YA DB
    // Mfano: update malipo kwenye database kuwa status = "completed"
    // await db.payments.update({ where: { paymentId }, data: { status: "completed", txid } });

    // Muhimu sana: Mwambie Pi malipo yamekamilika
    return res.status(200).json({ 
      success: true,
      message: "Payment completed successfully" 
    });

  } catch (error) {
    console.error("Error kwenye complete webhook:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
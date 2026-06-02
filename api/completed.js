export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("✅ Webhook imefika kutoka Pi!", req.body);
    
    const paymentId = req.body.data.payment.id;
    const txid = req.body.data.txid;
    
    // Hapa weka logic yako ya kuhifadhi malipo DB
    console.log("Payment ID:", paymentId, "TXID:", txid);
    
    return res.status(200).json({success: true});
  }
  
  // Kama mtu anafungua kwa browser, muonyeshe ujumbe
  return res.status(200).send("Webhook ya MYPESATZ iko hai ✅");
}
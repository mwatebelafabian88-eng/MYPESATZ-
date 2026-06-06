export default async function handler(req, res) {
  console.log("COMPLETE HIT:", Date.now());
  
  // 1. TOA KILA KITU. JIBU TU
  res.status(200).json({ 
    result: "completed", 
    txid: req.body.txid || "test-txid-123" 
  });
  
  // 2. HAKUNA KITU KINGINE HAPA CHINI. ZERO
}
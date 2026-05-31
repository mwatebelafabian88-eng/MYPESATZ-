import axios from "axios";

export default async function handler(req, res) {

  const "API_KEY ";

  if (req.headers["x-api-key"] !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { paymentId, txid } = req.body;

  try {

    // COMPLETE PAYMENT
    const response = await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      {
        txid
      },
      {
        headers: {
          Authorization: `Key ${process.env.PI_API_KEY}`
        }
      }
    );

    return res.status(200).json(response.data);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }

}
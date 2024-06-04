export default function handler(req, res) {
    const currentTime = new Date();
    res.status(200).json({ currentTime });
  }
// src/pages/api/banks.js
export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json([
        { id: 1, name: 'Bank of America' },
        { id: 2, name: 'Chase' },
        { id: 3, name: 'Wells Fargo' },
      ]);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


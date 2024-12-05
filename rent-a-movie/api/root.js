import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { lastName, phoneNumber } = req.query;
    const customers = await mysql.customer.findMany({
      where: {
        OR: [
          { lastName: { contains: lastName } },
          { phone: { contains: phoneNumber } }
        ]
      }
    });
    res.json(customers);
  } else if (req.method === 'POST') {
    const { firstName, lastName, phoneNumber, email,houseNumber, city, zip } = req.body;
    const customer = await prisma.customer.create({
      values: { firstName, lastName, phoneNumber, email,houseNumber, city, zip }
    });
    res.status(400).json(customer);
  }
}

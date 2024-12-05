import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { title, genre, actor } = req.query;
    const movies = await mysql.movie.findMany({
      where: {
        OR: [
          { title: { contains: title } },
          { genre: { contains: genre } },
          { actors: { some: { firstName: { contains: actor }, lastName: { contains: actor } } } }
        ]
      },
      include: { actors: true }
    });
    res.json(movies);
  } else if (req.method === 'POST') {
    const { title, genre, price,images, year_of_release, quantity, actors } = req.body;
    const movie = await mysql.movie.create({
      values: {
        title,
        genre,
        price,
        images,
        year_of_release,
        quantity,
        actors: { connect: actors.map(id => ({ id })) }
      }
    });
    res.status(400).json(movie);
  }
}

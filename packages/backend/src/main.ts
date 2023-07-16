import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Game } from '@maxi/shared-types';
import { MockData } from './mock-data';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    message: 'We are human after all, Flesh uncovered after all, Human!',
    api: 'Go to /api/games',
  });
});

app.get('/api/games', (req, res) => {
  const data = MockData.games;
  const { page, page_size, sort, order } = req.query;
  const sort_order = order ?? 'asc';
  const pageNumber = parseInt((page ?? 1) as string, 10);
  const pageSize = parseInt((page_size ?? 15) as string, 10);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  

  if (sort === 'name') {
    data.sort((a: Game, b: Game) => {
      if (sort_order === 'asc') {
        return a.name.localeCompare(b.name);
      } else if (sort_order === 'desc') {
        return b.name.localeCompare(a.name);
      } else {
        return 0;
      }
    });
  }
  const games: Game[] = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / pageSize);

  res.json({
    games,
    currentPage: pageNumber,
    totalPages: totalPages,
    totalGames: MockData.games.length,
  });
});

app.get('/api/games/:id', (req, res) => {
  const games = new Map();
  MockData.games.forEach((game) => {
    games.set(game.id, game);
  });
  const id = parseInt(req.params.id, 10);
  const game = games.get(id);

  if (game) {
    res.json(game);
  } else {
    res.status(404).json({
      error: 'Not found',
      type: 'Mama Mia!',
      message: 'Sorry, the game you are looking for is in another castle.',
    });
  }
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

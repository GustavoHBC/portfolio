import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../middlewares/db';
import { Players } from '../../models/Players';

const getPlayers = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const players = await Players.aggregate([
    {
      $lookup: {
        from: 'matches',
        localField: 'gameId',
        foreignField: 'id',
        as: 'game',
      },
    },
    {
      $unwind: '$game',
    },
  ]);
  return res.status(200).json(players);
};

export default connectDB(getPlayers);
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { gameId } = req.query;

  const client = await connectToDatabase();
  const db = client.db();

  if (req.method === 'POST') {
    try {
      const { score, userId } = req.body;
      await db.collection('scores').insertOne({
        // userId,
        gameId,
        score,
        createdAt: new Date(),
      });
      return res.status(200).json({ message: 'Score saved successfully' });
    } catch (error) {
      console.error('Error saving score:', error);
      return res.status(500).json({ message: 'Error saving score' });
    }
  }

  if (req.method === 'GET') {
    try {
      const scores = await db
        .collection('scores')
        .aggregate([
          {
            $match: { gameId }, // Filter scores by gameId
          },
          {
            $sort: { score: -1 }, // Sort scores in descending order
          },
          {
            $limit: 10, // Limit to top 10 scores
          },
          {
            $lookup: {
              from: 'users',
              localField: 'userId',
              foreignField: '_id',
              as: 'userDetails',
            },
          },
          {
            $unwind: '$userDetails',
          },
          {
            $project: {
              score: 1,
              username: '$userDetails.username',
            },
          },
        ])
        .toArray();

      return res.status(200).json(scores);
    } catch (error) {
      console.error('Error fetching scores:', error);
      return res.status(500).json({ message: 'Error fetching scores' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

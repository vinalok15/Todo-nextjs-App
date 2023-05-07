import { User } from '@/models/user';
import { connectDB, checkAuth } from '@/utils/features';

const { asyncError, errorHandler } = require('@/middlewares/error');

const handler = asyncError(async (req, res) => {
  if (req.method !== 'GET')
    return errorHandler(res, 500, 'Only GET Method is allowd.');

  await connectDB();

  const user = await checkAuth(req);

  if (!user) return errorHandler(res, 400, 'Login First');

  res.status(200).json({
    success: true,
    user,
  });
});

export default handler;

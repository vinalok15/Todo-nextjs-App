import { asyncError, errorHandler } from '@/middlewares/error';
import { Task } from '@/models/task';

const { connectDB, checkAuth } = require('@/utils/features');

const handler = asyncError(async (req, res) => {
  if (req.method !== 'POST')
    return errorHandler(res, 500, 'Post method not allowd.');

  await connectDB();

  const { title, description } = req.body;

  if (!title || !description)
    return errorHandler(res, 400, 'Please enter all fields.');

  const user = await checkAuth(req);

  if (!user) return errorHandler(res, 400, 'Login First');

  await Task.create({
    title,
    description,
    user: user._id,
  });
  res.json({
    success: true,
    message: 'Task added successfully...',
  });
});

export default handler;

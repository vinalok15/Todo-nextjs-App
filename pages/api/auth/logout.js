import { cookieSetter } from '@/utils/features';
const { asyncError, errorHandler } = require('@/middlewares/error');

const handler = asyncError(async (req, res) => {
  if (req.method !== 'GET')
    return errorHandler(res, 500, 'Only GET Method is allowd.');

  cookieSetter(res, null, false);

  res.status(200).json({
    success: true,
    message: `Logged out successfully..`,
  });
});

export default handler;

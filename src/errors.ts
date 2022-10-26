/**
 * This is a custom error middleware for Express.
 * https://expressjs.com/en/guide/error-handling.html
 */
export async function errors (
  err,
  _req,
  res,
  next
) {
  const code = err?.output?.statusCode || 400

  // log error
  console.error(err)

  /**
   * The default error message looks like this.
   */
  const error = err?.output?.payload || {
    statusCode: code,
    error: code === 400 ? 'Bad Request' : 'Internal Server Error',
    message: err?.details?.[0]?.message
  }
  
  if (next) {
    //
  }

  return res.status(code).send({ ...error })
}

export default { errors }

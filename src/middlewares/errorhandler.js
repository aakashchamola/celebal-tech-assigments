function errorHandler(err, req, res, next) {
  console.error(`[ERROR] ${err.message}`);

  res.status(err.status || 500).render('error', {
    title: 'Something went wrong!',
    message: err.message || 'Unexpected error occurred',
    status: err.status || 500,
  });
}

module.exports = errorHandler;

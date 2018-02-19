module.exports = handleError;

function handleError(err, res) {
  switch (err.code) {
    case `23502`: // Null value in not null column
      return res.status(400).json({ message: `Received a null value in '${err.column}' which violates not null constraint` });
    case `23505`:
    case `23503`:
      let message = err.detail.replace(/[\(\)]/g, `'`);
      message = message.replace(`=`, ` = `);
      message = message.replace(/"/g, `'`);
      return res.status(400).json({ message: message });
      
    default:
      switch (err.message) {
        case `Unauthorized`:
          return res.status(401).json({ message: `Unauthorized` });
        case `Forbidden`:
          return res.status(403).json({ message: `Forbidden` });
        default:
          return res.status(400).json({ message: err.message });
      }
  }
}
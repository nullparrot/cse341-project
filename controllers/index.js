sendTest = (req, res) => {
  const testData = "Hello World";
  res.status(200).send(testData);
};

// getUser

module.exports = { sendTest };

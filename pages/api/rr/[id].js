const handler = async (req, res) => {
  const { id } = req.query
  return res.status(200).json({
    name: id ? `Rick ${id}` : 'Rick',
    description: 'Never Gonna Give You Up',
    image: 'ipfs://QmeFtZFZ5KsyCeeFtk6oXwGZSMaAKTQLLpZqxtgDm5Z57i'
  })
}

export default handler

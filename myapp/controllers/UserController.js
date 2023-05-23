const users = [
  {
    id: 1,
    name: "Hoàng An",
  },
  {
    id: 2,
    name: "Sơn Đặng",
  },
];

module.exports = {
  index: (req, res) => {
    const { query } = req.query;
    let search = [];
    if (query?.length) {
      search = users.filter(({ name }) =>
        name.toLowerCase().includes(query.toLowerCase())
      );
    }

    res.status(200).json(search.length ? search : users);
    //Xây dựng chức năng lọc dữ liệu dựa vào query
  },
  get: (req, res) => {
    const { id } = req.params;

    const userRes = users.find((user) => user.id === parseInt(id));

    res.json(userRes);
  },
};

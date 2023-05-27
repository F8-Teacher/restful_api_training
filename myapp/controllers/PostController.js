const Post = require("../models/Post"); //Import Model

module.exports = {
  //Lấy danh sách posts
  index: async (req, res) => {
    const posts = await Post.find().sort({ createdAt: "desc" });

    res.json(posts);
  },

  //Lấy chi tiết post theo id
  get: async (req, res) => {
    //Lấy được id
    const { id } = req.params;

    const post = await Post.findById(id);

    res.json(post);
  },

  //Thêm mới post
  post: async (req, res) => {
    const { title, content } = req.body;
    const post = await Post.create({ title, content });
    res.json(post);
  },
};

//Controller => Action (Method Object)
//Yêu cầu 1: Hiển thị chi tiết 1 sản phẩm theo id
//Yêu cầu 2: Lọc sản phẩm theo tên (tìm kiếm tương đối, không phân biệt chữ hoa thường)
//Nồi cơm điện
//cơm

//keywords: filter array, includes string, toLowerCase

//truthy, falsy

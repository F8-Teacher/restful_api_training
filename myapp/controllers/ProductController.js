const Product = require("../models/Product");

// const products = [
//   {
//     id: 1,
//     name: "Sản phẩm 1",
//     price: 12000,
//   },

//   {
//     id: 2,
//     name: "Sản phẩm 2",
//     price: 12000,
//   },

//   {
//     id: 3,
//     name: "Sản phẩm 3",
//     price: 12000,
//   },
// ];

module.exports = {
  index: async (req, res) => {
    //req => http request
    //res => http response
    // const { name } = req.query; //Destructuring
    // if (!name) {
    //   res.json(products);
    // }

    // const filters = products.filter(({ name: productName }) =>
    //   productName.toLowerCase().includes(name.toLowerCase())
    // );

    //res.json(filters);
    /*
    1. Kiểm tra name có tồn tại hay không?

    2. Nếu name không tồn tại hoặc không có dữ liệu => Trả về tất cả sản phẩm

    3. Nếu name tồn tại và có dữ liệu => filter
    */

    const products = await Product.find().sort({ createdAt: "desc" });

    res.json(products);
  },

  get: async (req, res) => {
    const { id } = req.params; // Destructuring;

    // const product = products.find((product) => product.id === parseInt(id));

    // res.json(product);
    const product = await Product.findById(id);

    res.json(product);
  },

  post: async (req, res) => {
    //Lấy body của http method post
    const { name, price, description } = req.body;

    const response = await Product.create({
      name,
      price,
      description,
    });

    res.json(response);
  },
};

//Controller => Action (Method Object)
//Yêu cầu 1: Hiển thị chi tiết 1 sản phẩm theo id
//Yêu cầu 2: Lọc sản phẩm theo tên (tìm kiếm tương đối, không phân biệt chữ hoa thường)
//Nồi cơm điện
//cơm

//keywords: filter array, includes string, toLowerCase

//truthy, falsy

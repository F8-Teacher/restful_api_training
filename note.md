# Content type

1. application/json

{
"name": "Hoàng An",
"email": "hoangan.web@gmail.com"
}

2. application/x-www-form-urlencoded

name=Hoàng+An&email=hoangan.web@gmail.com

Cài đặt:

- NodeJS: Kiểm tra node -v và npm -v
- Postman
- Đăng ký tài khoản Mogodb Cloud

# Vấn đề khi dùng NodeJS thuần

- Xử lý URL
- Parse Body
- Http Method
- Chia các module

# Cài Express Generator

- npx express-generator --view=ejs myapp

- cd myapp

- npm i

- npm start

=> Gõ: http://127.0.0.1:3000

## Buổi 2

- Clone Repo Github
- Kéo folder vào Visual Studio Code
- cd myapp
- npm i
- npm start để khởi động dự án
- Vào trình duyệt, gõ: http://localhost:3000 hoặc http://127.0.0.1:3000

//Schema, Data

//Products: name, price, description

Bài tập: Xây dựng resource /posts

- title
- content

Xử lý:

- Lấy danh sách posts
- Thêm post mới
- Lấy chi tiết 1 post theo id

Các bước triển khai

- Tạo model Post.js

- Tạo Controller PostController.js

- Tạo route: /posts

## Authentication

Controller: AuthController

- /login
- /logout
- /register

Model: User

Schema: name, email, password

Middleware

- AuthMiddleware => Kiểm tra đăng nhập

### Đăng ký tài khoản

Post Request => Lấy Body => Mã hóa mật khẩu (bcrypt) => Insert vào Database => Tạo AccessToken và Refresh Token => Trả về Response (status, Token)

### Đăng nhập

Post Request => Lấy body => Lấy hash (Query theo email) => Compare với password từ body

- Đúng => Tạo accessToken và Refresh token
- Sai => Trả trả thông báo lỗi

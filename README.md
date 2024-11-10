---
lang: vi
---
# HỆ CƠ SỞ DỮ LIỆU - ASSIGNMENT - HỆ THỐNG KHÓA HỌC ONLINE

## NHÓM 8

### GIỚI THIỆU

Nhóm tác giả đang xây dựng một ứng dụng web cung cấp khóa học online cho người dùng tiềm năng là *học sinh, sinh viên, nhân viên văn phòng và hầu hết những người có nhu cầu học trực tuyến tại nhà*.

### NGƯỜI ĐÓNG GÓP
Thành viên nhóm tác giả:

- Trần Trung Nhựt - 2212483 - nhut.trannov25th@hcmut.edu.vn
- Võ Quang Đại Việt - 22xxxxx
- Vũ Lâm - 22xxxxx
- Nguyễn Minh Triết - 22xxxxx

### ĐIỀU KIỆN TIÊN QUYẾT
Trước khi tiếp tục, hãy chắc chắn  bạn đáp ứng đủ những điều kiện sau:

- Thiết bị của bạn đã được cài đặt **Node js** phiên bản từ  **v18.15.0**
- Bạn đã cài đặt **Docker Destop** để chạy cơ sở dữ liệu local.

### KHỞI ĐỘNG ỨNG DỤNG

1. Tải source code [tại đây](https://github.com/Tran-Trung-Nhut/Database_Elearning)
2. Nếu bạn chạy cơ sở dữ liệu nội bộ, chuyển hướng đến thư mục **backend** và chạy lệnh: `docker compose up`, để khơi động cơ sở dữ liệu nội bộ.
3. Chuyển hướng đến **backend**, chạy lệnh `npm run start` để khởi chạy backend hoặc chạy lệnh `npm run dev` để chạy dưới chế độ *developer*
4. Chuyển hướng đến **frontend**, chạy lệnh `npm ...` để khơi chạy frontend
5. Chạy lệnh `npm run studio` để xem dữ liệu trực quan hơn.
6. Nếu bạn xây dựng lại *schema*, chạy lệnh `npm run generate` sau đó là `npm run create:tables` (Cơ sở dữ liệu phải được khởi chạy trước đó).

***Lưu ý:***
- Không khuyến khích việc tự ý cập nhật lại schema.
- Khi cập nhật lại schema phải báo cho *Trần Trung Nhựt*.
- Code không được phép push thẳng lên nhánh *master*, code chỉ được merge vào *master* bởi *Trung Nhựt*
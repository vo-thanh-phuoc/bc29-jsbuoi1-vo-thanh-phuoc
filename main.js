
/*
*tinh luong nhan vien
sơ đồ 3 khối
+đầu vào:
-hệ số lương 100.000vnd/1ngày
-số ngày làm việc
+các bước xử lý
-công thức tính lương cho nhân viên
tổng lương= số ngày làm việc * hệ số lương.
+ đầu ra: tổng lương 
*/  
 const HSLUONG=100000;
 var songaylam=30;
 var tongluong=100000;
 tongluong=songaylam*HSLUONG;
 console.log("tong luong la: "+tongluong+"vnd");
 /*
 gia tri trung binh tổng 5 so thuc
 sơ đồ 3 khối
 + đầu vào:
 nhập vào giá trị 5 số thực.
 +các bước xử lý
 - công thức tính giá trị trung bình tổng 5 số thực
 giá trị trung bình= tổng 5 số thực/5
 +đầu ra
 xuất ra kết quả giá trị trung bình 
  */
 var sothuc1=4;
 var sothuc2=5;
 var sothuc3=8;
 var sothuc4=4;
 var sothuc5=5;
 var giatritrungbinh=0;
 giatritrungbinh=(sothuc1+sothuc2+sothuc3+sothuc4+sothuc5)/5;
 console.log("gia tri trung binh la: "+giatritrungbinh);

 /*
quy doi usd sang vnd
sơ đồ 3 khối
+đầu vào
- tỉ giá quy đổi usd-->vnd
1usd=23500 vnd
số lượng usd muốn quy đổi sang vnd
+các bước xử lý
-công thức quy đổi usd-->vnd
usd= 23500vnd* số lượng usd cần quy đổi
+đầu ra
số tiền nhận được sau khi quy đổi
  */

 const TIGIA=23500;
 var usd=2;
 var vnd=0;
 vnd=usd*TIGIA;
 console.log("ti gia quy doi: "+vnd+"VND");

/*
tính chu vi, diện tích hình chữ nhật
sơ đồ 3 khối
+đầu vào
-nhập vào giá trị chiều dài và chiều rộng
+các bước xủ lý
-công thức tính diện tích hình chữ nhật
diện tích= chiều dài+chiều rộng
-công thức tính chu vi
chu vi=(chiều dài+chiều rộng)*2
+đầu ra
-giá trị chu vi và diện tích hình chữ nhật
 */
 
 var canha=3;
 var canhb=4;
 var chuvi=0;
 var dientich=0;
 chuvi=(canha+canhb)*2;
 dientich=canha*canhb;
 console.log("chu vi hinh chu nhat la: "+chuvi);
 console.log("dien tich hinh chu nhat la: "+dientich);

/*
tính tổng hai ký số
+đầu vào
-nhập 1 số có 2 chữ số
+ cá bước xử lý
-tách lấy số hàng chục và lấy phần nguyên bằng công thức
số hàng chục= Math.floor(số nhập vào/10)
-tách lấy phần đơn vị thực hiện phép chia lấy phần dư
số hàng đơn vị=số nhập vào%10
-sau khi tách hàng chục và hàng đơn vị ta tính ký số của hai số bằng công thức
ký số=số hàng chục+số hàng đơn vị
+đầu ra
kết quả ký số.
*/

var so=18;
var kyso=0;
 var so_hang_chuc=1;
var so_hang_don_vi=0;
so_hang_chuc= Math.floor(so/10);
so_hang_don_vi=so%10;
kyso=so_hang_chuc+so_hang_don_vi;
console.log("ky so cua hai so la: "+kyso);




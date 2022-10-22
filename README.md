# Webtech2022
## Github
```
1. git pull
2. แตก branch จาก main
3. เสร็จแล้วตรวจสอบ
4. rebase จาก main ก่อนเผื่อมีใครทำก่อนหน้านั้น
5. ตรวจเรียบร้อยให้ squash and merge ไป branch main
6. เช็ค branch main ว่ามี error หรือไม่
```
## คำสั่ง
```
1. npm install
2. npm run start รัน react
```
## Css framework
```
Bootstrap : react-bootstrap
Documentation : https://react-bootstrap.github.io/
```
## เพิ่ม file ใหม่
```
1. เพิ่มในไฟล์ components
2. พยายามแยก component เช่น
    หน้าสินค้า
      - product.js
        - productheader.js
        - productlist.js
        - productfooter.js
```
## Header
```
อาจจะเป็นไฟล์ header.js ให้ทุกหน้าไปใช้
```

## เพิ่ม path
```
<AuthProvider>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      //////////////////////เพิ่มตรงนี้///////////////////////
     </Switch>
  </Router>
</AuthProvider>

```
## React Context
```
ตัวกลางที่สร้าง function / state ที่ใช้หลายหน้า
```

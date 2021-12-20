---
date: 2021-12-05T13:43
published: true
cover_image: how-to-secure.png
contributors:
  - Line Official Thailand
---

# ระวัง!! คุณยังส่ง User ID จาก Frontend ไป Backend อยู่หรือไม่

สำหรับนักพัฒนา LIFF application คงคุ้นเคยกับการใช้ liff.getProfile() เพื่อดึงข้อมูลของผู้ใช้ออกมากันอยู่แล้ว

```
{
  "userId":"U4af4980629...",
  "displayName":"Brown",
  "pictureUrl":"https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage":"Hello, LINE!",
  "email":"user@email.com"
}
```

เมื่อได้ข้อมูล User Profile มา ก็จะส่ง User ID (userId)ในนั้น ไปที่ระบบหลังบ้าน (API / Backend) เพื่อดึงข้อมูลจากฐานข้อมูล และเมื่อต้องการบันทึกข้อมูลลงฐานข้อมูล ก็ส่ง User ID แนบไปด้วย เพื่อที่จะได้รู้ว่า เป็นข้อมูลของผู้ใช้ LINE คนไหน

### **ซึ่งเป็นวิธีที่ผิด !!!**

Backend ไม่ควรเชื่อข้อมูล User ID ที่ส่งมาจาก Frontend โดยเด็ดขาด เนื่องจากอาจจะถูกปลอมแปลงระหว่างทางหรือถูกโจมตีได้

วิธีที่ LINE แนะนำก็มี 2 วิธีคือ ให้ใช้ ID Token หรือ Access Token ส่งไป Backend แทน เมื่อ Backend ได้รับ ID Token หรือ Access Token แล้วจะสามารถแปลงไปเป็น User Profile ได้เอง อย่างปลอดภัย

## วิธีการใช้งาน ID Token

ID Token เป็น JSON Web Token (JWT) ที่เก็บข้อมูล User Information เอาไว้ ซึ่งสามารถดึงได้จากฟังก์ชั่น liff.getIDToken() (ถ้าใช้งานบน External Browser ต้อง Login ก่อน)โดย LIFF app ที่ต้องการใช้งาน ID Token ต้องระบุ openid ในส่วนของ scope ด้วย

![line scope](https://miro.medium.com/max/1400/1*55icadpnYOt89h4LO3RR4A.png)
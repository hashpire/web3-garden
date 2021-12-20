---
date: 2021-12-05T13:43
published: true
cover_image: droid-dev-talk.jpeg
contributors:
  - Droid Dev Talk
  - Android Developer Thailand
---

# มาสรุปจาก Droid Dev Talk ตอนที่ 6 เกี่ยวกับ Android Studio กันสักนิด

![driod dev talk](droid-dev-talk.jpeg)

เริ่มเลยนะ 5 4 3 2 1

## สิ่งที่ชอบใน Android Studio

**Resource Manager** 
ในนั้นจะมีแท็ป Drawable, Color, Layout แล้วก็ Mip Map ส่วนตัวชอบใช้เนื่องจากขี้เกียจเปิดดู layout ทีละไฟล์สองไฟล์ ว่าเป็นหน้าที่เราอยากแก้ไหม แล้วจะได้ดู drawable ต่างๆว่ามีอะไรที่เอามาหยิบใช้ได้บ้างงี้ เพราะโปรเจกเราใหญ่มากกกกกกกก มากจน ไม่ไหวจะเปิดดูทีละไฟล์จ้า ซึ่งมันสะดวกต่อการ refactor โดยการลบของที่ไม่ใช้ได้ด้วยแหละ แต่ตอนอัดคือจะล่กๆนิดนุง

ด้วยความที่เราดึง drawable จากใน Zeplin แล้วจะได้ mhpi, hdpi, xhdpi, xxhdpi, xxxhdpi มาใส่ใน drawable ของเราได้เลย ซึ่งสามารถเข้าไปส่อง stat ต่างๆของ Android ใน dashboard ได้ตามเน้

**Gradle**
เมื่อก่อนสมัย Eclipse ยากลำบากมาก ต้องก้อปโค้ดมาใส่ แถมเจอไฟล์ jar นรกอีก จำได้เลยว่าตอนฝึกงานยังหา jar มายัดเลย ตอนนี้มี gradle มาใส่ dependency ของ library ต่างๆได้ง่ายขึ้น อีกทั้งใน editor ยังบอกอีกด้วยว่า version ใหม่มาล้าวนะ

**ความฉลาดในการ suggest หรือ auto complete**

**พิมพ์ทีเดียวรู้เรื่อง แม้ลืมเปลี่ยนภาษาก็ตาม ก็ยังมาให้ โอ้วววว กราบบบ**

### Kotlin REPL

เราชอบเพราะลองพิมพ์ก่อนที่จะพิมพ์ในโค้ด เผื่อแบบใส่ไปแล้ว crash ไง 55555 สามารถเข้าไปส่องใน Tools -> Kotlin -> Kotlin REPL แจ้

**Scratch File**
![scratch file](scratch-file.png)
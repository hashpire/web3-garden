---
date: 2021-12-06T13:43
published: true
---
# แนะนำเครื่องมือเทพๆ ที่จะทำให้การเขียน Vue.js สนุกขึ้น

วันนี้จะมาแนะนำเครื่องมือที่จะทำให้การเขียนเว็บด้วย Vue.js ง่ายและสนุกขึ้นกัน

เริ่มกันเลยดีกว่า

**1. vue-cli**

![vue-cli](https://miro.medium.com/max/2000/1*V2mi5uP4Ihx8sOexi00JHQ.png)

vue-cli เป็นเครื่องมือที่ทุกคนที่ใช้ Vue.js จะขาดแทบไม่ได้เลย เพราะมันจะช่วยให้เราขึ้นโปรเจค Vue.js ได้ในไม่กี่คำสั่ง ก็พร้อมที่จะทำงานได้เลย

```cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

ตอนที่เรา init โปรเจคใหม่ขึ้นมานั้นเราสามารถเลือก Template ได้ด้วยว่าจะใช้ Template ไหน ซึ่งหลักๆที่นิยมกันก็จะมี browserify กับ webpack ซึ่งการเลือก Template นั้นก็ง่ายมากๆ แค่ระบุต่อท้ายคำสั่ง vue init ไปแค่นั้นเอง

```
$ vue init <template-name> <project-name>
```

หลังจากรันคำสั่งนี้ vue init … แล้วก็จะมี wizard มาให้เรา Setup โปรเจคในแบบที่เราต้องการ ประมาณนี้

- จะใช้ Coding Standard ไหม ถ้าใช้จะเอาอะไรดี (Standard, AirBNB)
- จะใช้ Unit Tests ด้วย Karma + Mocha ไหม
- จะใช้ E2E Tests ด้วย Nightwatch ไหม

**2. vue-devtools**

เป็นเครื่องมือที่ทำให้เรา Debug เว็บบน Chrome Browser ได้ง่ายสุดๆ

![vue-devtools](https://miro.medium.com/max/2000/1*_qDqxZSYeSHYLDoNKU20xA.png)

ยิ่งถ้าเราใช้ Vue.js ร่วมกับ Vuex แล้วด้วยนั้น มันก็จะยิ่งเทพเข้าไปกันใหญ่เลย เพราะว่าเราจะสามารถทำสิ่งที่เรียกว่า Time Travel Debugging เหมือนๆกับฝั่ง React/Redux เค้าได้ด้วย

![vue-devtools-gif](https://miro.medium.com/max/1000/1*hYBB7XfKWI0_j5hs6ZIfZA.gif)

**3. vue-play**

![vue-play](https://miro.medium.com/max/700/1*7j64koaV_2Gl1PdT2j0Vng.png)

**vue-play** นี้เค้าไปได้ inspiration มาจาก **react-storybook** ที่เป็นเครื่องมือสำหรับใช้ในการสร้างสภาพแวดล้อมสำหรับการทดสอบ UI Component ของเรา ซึ่งมันทำให้เราแยกการทดสอบ Component ต่างๆได้ง่ายขึ้นมากเลยทีเดียว

### สรุป

จะเห็นว่าเครื่องมือ และตัวช่วยเทพๆของ vue.js มีทะยอยออกมาให้ใช้กันเรื่อยๆ ซึ่งอาจจะตามหลัง react อยู่บ้างในบางเรื่อง แต่ก็ถือว่ามีอนาคตที่ดีรออยู่ และเป็นอีกตัวเลือกที่น่าสนใจสำหรับโปรเจคต่อไปของคุณ

![vue-awesome](https://miro.medium.com/max/700/1*ysspHBTffLmP8PEYEy1awA.png)
# test-bmi

#### ให้เขียน function ในข้อ 1 และ ข้อ 2 เพื่อคำนวณและหาความหมายของค่าดัชนีมวลกาย (BMI) ดังต่อไปนี้

1. ให้เขียน Function ชื่อ calculateBMI (weight, height) เพื่อคำนวณดัชนีมวลกาย (BMI) โดยใช้สูตร ดังนี้

   **_ดัชนีมวลกาย (BMI) = น้ำหนักตัว (กิโลกรัม)/ส่วนสูง(เมตร)<sup>2<sup>_**

2. ให้เขียน Function ชื่อ getBMIMeaning(weight, height) เพื่อเรียกใช้ฟังก์ชัน calculateBMI คำนวณดัชนีมวลกาย (BMI) ในข้อ 1 และให้ return ข้อความแสดงข้อความ (case sensitive)ที่เป็นกลุ่มภาวะน้ำหนักตัว ตามเงื่อนไข ดังนี้
   - BMI < 18.5 จะแสดงข้อความ "Underweight"
   - BMI อยู่ในช่วง 18.5 -24.9 จะแสดงข้อความ "Normal weight"
   - BMI > 25.0 จะแสดงข้อความ "Overweight"

- ตัวอย่างเช่น
  - getBMIMeaning(65, 1.8) จะได้ Normal weight
  - getBMIMeaning(80, 1.7) จะได้ Overweight
  - getBMIMeaning(44, 1.6) จะได้ Underweight

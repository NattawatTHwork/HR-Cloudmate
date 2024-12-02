const selectSalaryStart = document.getElementById('select_salary_start');
let defaultSalaryStart = true; // เพิ่มตัวแปรเพื่อตรวจสอบว่าต้องเลือกค่าเริ่มต้นหรือไม่

for (let value = 0; value <= 95000; value += 5000) {
    const option = document.createElement('option');
    option.value = value;
    option.text = value.toLocaleString();

    const urlParams_salary_start = new URLSearchParams(window.location.search);
    if (urlParams_salary_start.has('salary_start')) {
        const salary_start = parseInt(urlParams_salary_start.get('salary_start')); // แปลงเป็นจำนวนเต็ม
        if (value === salary_start) {
            option.selected = true;
            defaultSalaryStart = false; // พบค่าที่ตรงกัน ไม่ต้องเลือกค่าเริ่มต้น
        }
    }

    selectSalaryStart.appendChild(option);
}

// เลือกค่าเริ่มต้นถ้าไม่พบค่าที่ตรงกับ params
if (defaultSalaryStart) {
    selectSalaryStart.value = '0'; // ตั้งค่าเริ่มต้นเป็นค่า 0 หรือค่าตามที่คุณต้องการ
}

const selectSalaryEnd = document.getElementById('select_salary_end');
let defaultSalaryEnd = true; // เพิ่มตัวแปรเพื่อตรวจสอบว่าต้องเลือกค่าเริ่มต้นหรือไม่

for (let value = 5000; value <= 200000; value += 5000) {
    const option = document.createElement('option');
    option.value = value;
    option.text = value.toLocaleString();

    const urlParams_salary_end = new URLSearchParams(window.location.search);
    if (urlParams_salary_end.has('salary_end')) {
        const salary_end = parseInt(urlParams_salary_end.get('salary_end')); // แปลงเป็นจำนวนเต็ม
        if (value === salary_end) {
            option.selected = true;
            defaultSalaryEnd = false; // พบค่าที่ตรงกัน ไม่ต้องเลือกค่าเริ่มต้น
        }
    }

    selectSalaryEnd.appendChild(option);
}

// เลือกค่าเริ่มต้นถ้าไม่พบค่าที่ตรงกับ params
if (defaultSalaryEnd) {
    selectSalaryEnd.value = '100000'; // ตั้งค่าเริ่มต้นเป็นค่า 5000 หรือค่าตามที่คุณต้องการ
}
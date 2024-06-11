// const user_token = localStorage.getItem('token');
// const base64Url = user_token.split(".")[1];
// const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
// var payload = decodeURIComponent(
//     atob(base64)
//         .split("")
//         .map(function (c) {
//             return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//         })
//         .join("")
// );
// data_token = JSON.parse(payload);

// const currentTime = Date.now() / 1000; // เวลาปัจจุบันในหน่วยวินาที
// if (data_token.exp < currentTime) {
//     localStorage.removeItem('token');
// }

const user_token = localStorage.getItem('token');
if (user_token) {
    const payloadBase64 = user_token.split('.')[1];
    data_token = JSON.parse(atob(payloadBase64)); // เอาออก const ออก
    const currentTimeUTC = Math.floor(Date.now() / 1000);
    if (data_token.exp < currentTimeUTC) {
        localStorage.removeItem('token');
    }
}

// ฟังก์ชันสำหรับตรวจสอบว่ามี Cookie หรือไม่
function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        // ลบช่องว่างที่อาจจะอยู่ก่อนชื่อ Cookie
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // ถ้าไม่พบ Cookie ให้คืนค่า null
    return null;
}

// ตรวจสอบว่ามี Cookie ชื่อ "my_cookie" หรือไม่
let myCookie = getCookie("my_cookie");

if (myCookie) {
    // ถ้ามี cookie
    console.log("Cookie 'my_cookie' มีค่า: " + myCookie);
} else {
    // ถ้าไม่มี cookie
    console.log("Cookie 'my_cookie' ไม่ได้ถูกตั้งค่า");
}

const user_token = localStorage.getItem('token');
const base64Url = user_token.split(".")[1];
const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
var payload = decodeURIComponent(
    atob(base64)
        .split("")
        .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
);
data_token = JSON.parse(payload);
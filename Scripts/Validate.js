function validateThemExt() {



    var a = document.forms["formext"]["Name"].value;
    var b = document.forms["formext"]["Address"].value;
    var c = document.forms["formext"]["Phone"].value;
    var d = document.forms["formext"]["Extent"].value;
    var e = document.forms["formext"]["Expect"].value;
    var g = document.forms["formext"]["Deadline"].value;
    var n = document.forms["formext"]["Job"].value;




    var status;




    if (a == "") {
        document.getElementById("a").innerHTML = "Vui lòng nhập Tên của bạn!";
        status = false;
    }
    else {
        document.getElementById("a").innerHTML = "";
    }

    if (b == "") {
        document.getElementById("b").innerHTML = "Vui lòng chọn Tỉnh mà bạn đang ở!";
        status = false;
    }
    else {
        document.getElementById("b").innerHTML = "";
    }

    if (c == "") {
        document.getElementById("c").innerHTML = "Vui lòng nhập Số điện thoại của bạn";
        status = false;
    }
    else if (isNaN(c)) {
        document.getElementById("c").innerHTML = "Vui lòng nhập số cho Số điện thoại của bạn";
        status = false;
    }
    else {
        document.getElementById("c").innerHTML = "";
    }

    if (d == "") {
        document.getElementById("d").innerHTML = "Vui lòng xác nhận Cá nhân hay đại diện Tổ chức!";
        status = false;
    }
    else {
        document.getElementById("d").innerHTML = "";
    }

    if (e == "") {
        document.getElementById("e").innerHTML = "Vui lòng nhập Mục tiêu của bạn!";
        status = false;
    }
    else {
        document.getElementById("e").innerHTML = "";
    }

    if (g == "") {
        document.getElementById("g").innerHTML = "Vui lòng nhập Thời hạn hoàn thành của bạn!";
        status = false;
    }
    else if (isNaN(g)) {
        document.getElementById("g").innerHTML = "Vui lòng nhập số cho Thời gian hoàn thành của bạn";
        status = false;
    }
    else {
        document.getElementById("g").innerHTML = "";
    }

    if (n == "") {
        document.getElementById("n").innerHTML = "Vui lòng nhập Nghề nghiệp của bạn!";
        status = false;
    }
    else {
        document.getElementById("n").innerHTML = "";
    }

    return status;
}
function bai1() {
  let a = +document.getElementById("soA").value;
  let b = +document.getElementById("soB").value;
  let result = document.getElementById("result");

  if (a % b == 0) {
    result.innerHTML = `${a} chia hết cho ${b}`;
  } else {
    result.innerHTML = `${a} không chia hết cho ${b}`;
  }
}
["soA", "soB"].forEach((id) => {
  document.getElementById(id).addEventListener("input", bai1);
});

function bai2() {
  let age = +document.getElementById("age").value;
  let dieuKien = document.getElementById("dieuKien");

  if (age >= 15) {
    dieuKien.innerHTML = `${age} tuổi đủ điểu kiện lên lớp 10`;
  } else {
    dieuKien.innerHTML = `${age} tuổi không đủ điều kiện lên lớp 10`;
  }
}
document.getElementById("age").addEventListener("input", bai2);

function bai3() {
  let n = +document.getElementById("n").value;
  let answer = document.getElementById("answer");

  if (n > 0) {
    answer.innerHTML = `${n} > 0`;
  } else if (n < 0) {
    answer.innerHTML = `${n} < 0`;
  } else {
    answer.innerHTML = `${n} = 0`;
  }
}
document.getElementById("n").addEventListener("input", bai3);

function bai4() {
  let so1 = +document.getElementById("so1").value;
  let so2 = +document.getElementById("so2").value;
  let so3 = +document.getElementById("so3").value;
  let gtLonNhat = document.getElementById("gtLonNhat");

  if (so1 >= so2 && so1 >= so3) {
    gtLonNhat.innerHTML = `${so1} là số lớn nhất`;
  } else if (so2 >= so3) {
    gtLonNhat.innerHTML = `${so2} là số lớn nhất`;
  } else {
    gtLonNhat.innerHTML = `${so3} là số lớn nhất`;
  }
}

["so1", "so2", "so3"].forEach((id) => {
  document.getElementById(id).addEventListener("input", bai4);
});

function bai5() {
  let baiKtra = +document.getElementById("baiKtra").value;
  let giuaKy = +document.getElementById("giuaKy").value;
  let cuoiKy = +document.getElementById("cuoiKy").value;
  let hocLuc = document.getElementById("hocLuc");
  let diemTB = (baiKtra + giuaKy + cuoiKy) / 3;
  if (diemTB >= 8) {
    hocLuc.innerHTML = "giỏi";
  } else if (diemTB >= 6.5) {
    hocLuc.innerHTML = "khá";
  } else if (diemTB >= 5) {
    hocLuc.innerHTML = "trung bình";
  } else if (diemTB >= 3.5) {
    hocLuc.innerHTML = "yếu";
  } else {
    hocLuc.innerHTML = "kém";
  }
}
["baiKtra", "giuaKy", "cuoiKy"].forEach((id) => {
  document.getElementById(id).addEventListener("input", bai5);
});

function bai6() {
  let doanhSo = +document.getElementById("doanhSo").value;
  let hoaHong = document.getElementById("hoaHong");

  if (doanhSo > 100) {
    hoaHong.innerHTML = doanhSo * 0.1;
  } else if (doanhSo > 50) {
    hoaHong.innerHTML = doanhSo * 0.05;
  } else if (doanhSo > 20) {
    hoaHong.innerHTML = doanhSo * 0.02;
  } else {
    hoaHong.innerHTML = "";
  }
}
document.getElementById("doanhSo").addEventListener("input", bai6);

function bai7() {
  let soPhut = +document.getElementById("soPhut").value;
  let phiThueBao = 25000;
  let cuocGoi = 0;

  if (soPhut <= 50) {
    cuocGoi = soPhut * 600;
  } else {
    cuocGoi = 50 * 600 + (soPhut - 50) * 400;
  }

  let tongCuoc = phiThueBao + cuocGoi;

  document.getElementById(
    "cuocPhi"
  ).innerText = `Tổng cước phải trả: ${tongCuoc.toLocaleString()} VNĐ`;
}
document.getElementById("soPhut").addEventListener("input", bai7);

function tampil(){
  var nilai = document.getElementById("NilaiAkhir").value;
  var grade;
  var indexsnilai;
  var keterangan;
  if (nilai >= 85 && nilai <= 100) {
    grade = "A";
    indexsnilai = "4.00";
    keterangan = "Sangat Baik";
  } else if (nilai >= 79 && nilai <= 84) {
    grade = "A-";
    indexsnilai = "3.67";
  } else if (nilai >= 74 && nilai <= 78) {
    grade = "B+";
    indexsnilai = "3.33";
  } else if (nilai >= 69 && nilai <= 73) {
    grade = "B";
    indexsnilai = "3.00";
  } else if (nilai >= 64 && nilai <= 68) {
    grade = "B-";
    indexsnilai = "2.67";
  } else if (nilai >= 59 && nilai <= 63) {
    grade = "C+";
    indexsnilai = "2.33";
  } else if (nilai >= 54 && nilai <= 58) {
    grade = "C";
    indexsnilai = "2.00";
  } else if (nilai >= 41 && nilai <= 53) {
    grade = "D";
    indexsnilai = "1.00";
  } else if (nilai >= 0 && nilai <= 40) {
    grade = "E";
    indexsnilai = "0.00";
  } else {
    grade = "Coba Lagi";

  }
  
  var id_tamp = document.getElementById("tampilan");
  var id_NIM = document.getElementById("NIM");
  var id_Nama = document.getElementById("Nama");
  var id_MataKuliah = document.getElementById("MataKuliah");
  var id_NilaiAkhir = document.getElementById("NilaiAkhir");
  var id_grade = grade;
  var  id_indexsnilai =  indexsnilai;
  id_tamp.innerHTML = id_NIM.value +", "+ id_Nama.value+", "+ id_MataKuliah.value+", "+ id_NilaiAkhir.value+","+ id_grade+","+id_indexsnilai;
}
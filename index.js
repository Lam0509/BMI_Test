function test() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / (height ^ 2);
    if (bmi >= 30) {
        document.getElementById("text").innerHTML = "Phân loại chỉ số cân nặng của cơ thể: Obese";
    } else if (bmi >= 25) {
        document.getElementById("text").innerHTML = "Phân loại chỉ số cân nặng của cơ thể: Overweight";
    } else if (bmi >= 18.5) {
        document.getElementById("text").innerHTML = "Phân loại chỉ số cân nặng của cơ thể: Normal";
    } else document.getElementById("text").innerHTML = "Phân loại chỉ số cân nặng của cơ thể: Underweight";
}

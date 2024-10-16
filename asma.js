function saveAndCheckPassword4() {
  // الحصول على قيم المدخلات
  const passwordInput4 = document.getElementById("passwordteather4"); 
  const textInput4 = document.getElementById("myInput4");   
  const password4 = passwordInput4.value;
  const text4 = textInput4.value;
 // التحقق من كلمة المرور لحفظ النص    
  if (password4 === "ui4") {    
    // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
    let savedTexts4 = JSON.parse(localStorage.getItem("savedTexts4")) || [];    
    savedTexts4.push(text4);
    localStorage.setItem("savedTexts4", JSON.stringify(savedTexts4));        
       // عرض النصوص المحفوظة
       displaySavedTexts4();
  } else {
    alert("كلمة المرور خاطئة");
  }
}
// دالة لعرض النصوص المحفوظة
function displaySavedTexts4() {
  const resultDiv4 = document.getElementById("result4");
  const savedTexts4 = JSON.parse(localStorage.getItem("savedTexts4")) || [];
  resultDiv4.innerHTML = ""; // مسح المحتوى السابق
  savedTexts4.forEach(text4 => {
    const newParagraph4 = document.createElement("p");
    newParagraph4.textContent = text4;
    resultDiv4.appendChild(newParagraph4);
  });
}
// دالة لحذف جميع النصوص
function deleteAllTexts4() {
  const deletePassword4 = prompt("أدخل كلمة المرور للحذف:");
  if (deletePassword4 === "mostafadel") {
    localStorage.removeItem("savedTexts4");
    displaySavedTexts4(); // عرض قائمة فارغة بعد الحذف
    alert("تم حذف جميع النصوص بنجاح.");
  } else {
    alert("كلمة المرور للحذف خاطئة.");
  }
}
// عند تحميل الصفحة، عرض النصوص المحفوظة
window.onload = function() {
  displaySavedTexts4();
};
// ربط حدث النقر بزر الحذف    
const deleteButton4 = document.getElementById("deleteButton4");
deleteButton4.addEventListener("click", deleteAllTexts4);



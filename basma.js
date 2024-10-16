function saveAndCheckPassword5() {
  // الحصول على قيم المدخلات
  const passwordInput5 = document.getElementById("passwordteather5"); 
  const textInput5 = document.getElementById("myInput5");   
  const password5 = passwordInput5.value;
  const text5 = textInput5.value;
 // التحقق من كلمة المرور لحفظ النص    
  if (password5 === "op5") {    
    // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
    let savedTexts5 = JSON.parse(localStorage.getItem("savedTexts5")) || [];    
    savedTexts5.push(text5);
    localStorage.setItem("savedTexts5", JSON.stringify(savedTexts5));        
       // عرض النصوص المحفوظة
       displaySavedTexts5();
  } else {
    alert("كلمة المرور خاطئة");
  }
}
// دالة لعرض النصوص المحفوظة
function displaySavedTexts5() {
  const resultDiv5 = document.getElementById("result5");
  const savedTexts5 = JSON.parse(localStorage.getItem("savedTexts5")) || [];
  resultDiv5.innerHTML = ""; // مسح المحتوى السابق
  savedTexts5.forEach(text5 => {
    const newParagraph5 = document.createElement("p");
    newParagraph5.textContent = text5;
    resultDiv5.appendChild(newParagraph5);
  });
}
// دالة لحذف جميع النصوص
function deleteAllTexts5() {
  const deletePassword5 = prompt("أدخل كلمة المرور للحذف:");
  if (deletePassword5 === "mostafadel") {
    localStorage.removeItem("savedTexts5");
    displaySavedTexts5(); // عرض قائمة فارغة بعد الحذف
    alert("تم حذف جميع النصوص بنجاح.");
  } else {
    alert("كلمة المرور للحذف خاطئة.");
  }
}
// عند تحميل الصفحة، عرض النصوص المحفوظة
window.onload = function() {
  displaySavedTexts5();
};
// ربط حدث النقر بزر الحذف    
const deleteButton5 = document.getElementById("deleteButton5");
deleteButton5.addEventListener("click", deleteAllTexts5);



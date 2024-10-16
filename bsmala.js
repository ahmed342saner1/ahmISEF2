function saveAndCheckPassword6() {
  // الحصول على قيم المدخلات
  const passwordInput6 = document.getElementById("passwordteather6"); 
  const textInput6 = document.getElementById("myInput6");   
  const password6 = passwordInput6.value;
  const text6 = textInput6.value;
 // التحقق من كلمة المرور لحفظ النص    
  if (password6 === "as6") {    
    // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
    let savedTexts6 = JSON.parse(localStorage.getItem("savedTexts6")) || [];    
    savedTexts6.push(text6);
    localStorage.setItem("savedTexts6", JSON.stringify(savedTexts6));        
       // عرض النصوص المحفوظة
       displaySavedTexts6();
  } else {
    alert("كلمة المرور خاطئة");
  }
}
// دالة لعرض النصوص المحفوظة
function displaySavedTexts6() {
  const resultDiv6 = document.getElementById("result6");
  const savedTexts6 = JSON.parse(localStorage.getItem("savedTexts6")) || [];
  resultDiv6.innerHTML = ""; // مسح المحتوى السابق
  savedTexts6.forEach(text6 => {
    const newParagraph6 = document.createElement("p");
    newParagraph6.textContent = text6;
    resultDiv6.appendChild(newParagraph6);
  });
}
// دالة لحذف جميع النصوص
function deleteAllTexts6() {
  const deletePassword6 = prompt("أدخل كلمة المرور للحذف:");
  if (deletePassword6 === "mostafadel") {
    localStorage.removeItem("savedTexts6");
    displaySavedTexts6(); // عرض قائمة فارغة بعد الحذف
    alert("تم حذف جميع النصوص بنجاح.");
  } else {
    alert("كلمة المرور للحذف خاطئة.");
  }
}
// عند تحميل الصفحة، عرض النصوص المحفوظة
window.onload = function() {
  displaySavedTexts6();
};
// ربط حدث النقر بزر الحذف    
const deleteButton6 = document.getElementById("deleteButton6");
deleteButton6.addEventListener("click", deleteAllTexts6);



function saveAndCheckPassword2() {
  // الحصول على قيم المدخلات
  const passwordInput2 = document.getElementById("passwordteather2"); 
  const textInput2 = document.getElementById("myInput2");   
  const password2 = passwordInput2.value;
  const text2 = textInput2.value;
 // التحقق من كلمة المرور لحفظ النص    
  if (password2 === "er2") {    
    // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
    let savedTexts2 = JSON.parse(localStorage.getItem("savedTexts2")) || [];    
    savedTexts2.push(text2);
    localStorage.setItem("savedTexts2", JSON.stringify(savedTexts2));        
       // عرض النصوص المحفوظة
       displaySavedTexts2();
  } else {
    alert("كلمة المرور خاطئة");
  }
}
// دالة لعرض النصوص المحفوظة
function displaySavedTexts2() {
  const resultDiv2 = document.getElementById("result2");
  const savedTexts2 = JSON.parse(localStorage.getItem("savedTexts2")) || [];
  resultDiv2.innerHTML = ""; // مسح المحتوى السابق
  savedTexts2.forEach(text2 => {
    const newParagraph2 = document.createElement("p");
    newParagraph2.textContent = text2;
    resultDiv2.appendChild(newParagraph2);
  });
}
// دالة لحذف جميع النصوص
function deleteAllTexts2() {
  const deletePassword2 = prompt("أدخل كلمة المرور للحذف:");
  if (deletePassword2 === "mostafadel") {
    localStorage.removeItem("savedTexts2");
    displaySavedTexts2(); // عرض قائمة فارغة بعد الحذف
    alert("تم حذف جميع النصوص بنجاح.");
  } else {
    alert("كلمة المرور للحذف خاطئة.");
  }
}
// عند تحميل الصفحة، عرض النصوص المحفوظة
window.onload = function() {
  displaySavedTexts2();
};
// ربط حدث النقر بزر الحذف    
const deleteButton2 = document.getElementById("deleteButton2");
deleteButton2.addEventListener("click", deleteAllTexts2);



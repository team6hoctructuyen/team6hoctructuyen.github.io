// Hiển thị nội dung tương ứng khi click vào menu
const menuItems = document.querySelectorAll(".menu ul li a");
const contentSections = document.querySelectorAll(".content section");

for (let i = 0; i < menuItems.length; i++) {
menuItems[i].addEventListener("click", function() {
for (let j = 0; j < contentSections.length; j++) {
contentSections[j].classList.add("hidden");
}
contentSections[i].classList.remove("hidden");
});
}

// Hiển thị nội dung mặc định
contentSections[0].classList.remove("hidden");
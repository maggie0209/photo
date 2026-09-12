document.addEventListener("DOMContentLoaded", () => {
  const bookElement = document.getElementById("book");

  // 初始化 PageFlip
  const pageFlip = new St.PageFlip(bookElement, {
    width: 400,          // 單頁寬度
    height: 600,         // 單頁高度
    size: "stretch",
    minWidth: 300,
    maxWidth: 600,
    minHeight: 450,
    maxHeight: 900,
    showCover: true,
    mobileScrollSupport: false
  });

  // 載入頁面
  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  // 按鈕控制
  document.getElementById("prev-btn").addEventListener("click", () => {
    pageFlip.flipPrev();
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    pageFlip.flipNext();
  });
});

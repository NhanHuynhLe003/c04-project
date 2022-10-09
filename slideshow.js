
/** linked list */

let slideShowList = document.querySelectorAll(".slides");
let cur = 0;
let next = 0;
let pre = 0;
slideShowList[cur].setAttribute("style", "display: block;");
function hienThiSlideTruocDo() {
  pre = cur - 1;
  if (pre < 0) {
    pre = slideShowList.length - 1;
  }
  if (cur != 0) {
    slideShowList[cur].setAttribute("style", "display: none;");
    slideShowList[pre].setAttribute("style", "display: block");
  } else {
    slideShowList[cur].setAttribute("style", "display: none;");
    slideShowList[pre].setAttribute("style", "display: block");
  }
  cur = pre;
}
function hienThiSlideKeTiep() {
  const lastImg = slideShowList.length - 1;
  next = cur + 1;
  if (next == slideShowList.length) {
    next = 0;
  }
  if (cur != lastImg) {
    slideShowList[cur].setAttribute("style", "display: none;");
    slideShowList[next].setAttribute("style", "display: block");
  } else {
    slideShowList[cur].setAttribute("style", "display: none;");
    slideShowList[next].setAttribute("style", "display: block");
  }
  cur = next;
}

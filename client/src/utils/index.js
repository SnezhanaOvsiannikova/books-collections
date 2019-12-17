export const unScroll = ({ isShowPopup }) => {
  const bodyElem = document.getElementById("body");

  return isShowPopup
    ? bodyElem.classList.add("noscroll-class")
    : bodyElem.classList.remove("noscroll-class");
};

const loaderWrapper = document.querySelector(".loader-wrapper");

export const showLoader = (status) => {
  if (status) {
    loaderWrapper.classList.remove("hidden");
  } else {
    loaderWrapper.classList.add("hidden");
  }
};

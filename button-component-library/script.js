const root = document.documentElement
const btn = document.querySelector("button")
const header = document.querySelector(".header")

btn.addEventListener("click", () => {
  const rootStyle = root.style
  rootStyle.setProperty("--favorite-color", "aqua")

  const headerStyle = header.style
  headerStyle.setProperty("--favorite-color", "red")
})

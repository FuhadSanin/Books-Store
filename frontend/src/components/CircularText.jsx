import React, { useEffect } from "react"

const CircularText = () => {
  useEffect(() => {
    const text = document.querySelector(".circular-text h1")
    const innerText = text.innerHTML
    text.innerHTML = innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${
            (360 / innerText.length) * i
          }deg)">${char}</span>`
      )
      .join("")
  }, [])
  return (
    <div className="circle">
      <div className="circular-text">
        <a href="">
          <h1>Click-here-to-Login-</h1>
        </a>
      </div>
    </div>
  )
}

export default CircularText

const menuItem = document.querySelectorAll(".menuItem")
const wrapper = document.querySelector(".sliderWrapper");

// console.log(wrapper)

// wrapper.style.transform ="translateX(-400vw)"

menuItem.forEach((item,index)=>{
     item.addEventListener("click",()=>{
      wrapper.style.transform = `translate(${-100 * index}vw)`
     })
}

)
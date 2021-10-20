const header=document.getElementById("header")
const title=document.getElementById("title")
const excerpt=document.getElementById("excerpt")
const profile_img=document.getElementById("profile_img")
const name=document.getElementById("name")
const date=document.getElementById("date")

const animated_bgs=document.querySelectorAll(".animated-bg")
const animated_texts=document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)
function getData(){
    header.innerHTML='<img src=https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?cs=srgb&dl=pexels-secret-garden-931177.jpg&fm=jpg alt=""/>'
title.innerHTML="Lorem ipsum dolor sit amet."
excerpt.innerHTML="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam maiores et in ut! Fuga laborum ducimus assumenda mollitia dolor nulla."
profile_img.innerHTML=' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
name.innerHTML="John Doe"
date.innerHTML="October, 8, 2021"

animated_bgs.forEach(bg=>bg.classList.remove("animated-bg"))
animated_texts.forEach(text=>text.classList.remove("animated-bg-text"))
}

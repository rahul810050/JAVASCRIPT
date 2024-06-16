# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((btn)=>{
	btn.addEventListener("click",function(e){
		if(e.target.id === "gold") body.style.backgroundColor = e.target.id // we can also write the color itself instead of e.target.id
		if(e.target.id === "teal") body.style.backgroundColor = e.target.id
		if(e.target.id === "olive") body.style.backgroundColor = e.target.id
		if(e.target.id === "coral") body.style.backgroundColor = e.target.id
	})
})
```
import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Header/Nav';
import Main from './Main/Main';
import Bottom from './Bottom/Bottom';
import './Main/Animations.css';

class App extends Component {
	componentDidMount(){
		const head=document.getElementById("header");
		const nav=document.getElementById("navigation");
		const personal=document.getElementById("personal-data");
		const skills=document.getElementById("skills");
		const portfolio=document.getElementById("portfolio");
		const arrowDown=document.getElementById("arrow-down");
		window.addEventListener('scroll',(event)=>{
			const boundingHead=head.getBoundingClientRect();
			// if(boundingHead.top===0){
			// 	nav.children[0].children[0].style.fontSize="5em"
			// }
			const boundingH1=head.children[0].children[0];
			const heightTrigger=boundingH1.offsetHeight;
			const triggerPoint=(window.innerHeight+boundingHead.top)/window.innerHeight;
			//nav height
			//	document.styleSheets[2].cssRules[14].style.height
			//nav h1 
			//	document.styleSheets[2].cssRules[15]
			//arrow
				if(window.innerHeight+boundingHead.top<heightTrigger+200){
					arrowDown.classList.add("d-none")
				}
				else{
					arrowDown.classList.remove("d-none")
				}
			//header - nav
				let scale=((boundingHead.height+boundingHead.top)/7/10);
				if(window.innerHeight+boundingHead.top<=100){
					nav.children[0].style.width="100%"
					nav.children[1].style.display="flex"
					head.style.opacity="0"
					nav.children[0].children[0].style.fontSize="2em"
					nav.style.height=100+"px";
					nav.children[0].children[0].style.textAlign="center";
					const toHide=document.getElementsByClassName("disappear");
					[...toHide].map(element=>{
						element.classList.add("disappear-animation");
						return null
					})
				}
				else if(window.innerHeight+boundingHead.top<heightTrigger+80 && window.innerHeight+boundingHead.top>100){
					console.log({
						top: boundingHead.top,
						height: boundingHead.height,
						scale: (((boundingHead.height+boundingHead.top)/7/10))
					})
					head.style.opacity="0"
					nav.children[1].style.display=""
					nav.style.height=window.innerHeight+boundingHead.top+"px"
					if(!window.matchMedia("(hover: none)").matches){
						if(scale>5) nav.children[0].children[0].style.fontSize="5em";
						else if(scale<=5 && scale>2){
							nav.children[0].children[0].style.fontSize=scale+"em";
						}
						else{
							nav.children[0].children[0].style.fontSize="2em";
						}
					}
					nav.children[0].children[0].style.textAlign="center"
					const toHide=document.getElementsByClassName("disappear");
					[...toHide].map(element=>{
						element.classList.remove("disappear-animation");
						return null
					})
				}
				else{
					if(!window.matchMedia("(hover: none)").matches){

					nav.children[0].children[0].style.fontSize="5em"
					}
					else{nav.children[0].children[0].style.fontSize="2em"}
					head.style.opacity="1"
					nav.style.height="";
				}
			//remaining
				//if(window.innerHeight+boundingHead.top<=100){
				//	personal.classList.add("appear")
				//}

				switch(true){
					case (triggerPoint<-2.80):{
						document.getElementById("athird").style.fontWeight="normal";
						document.getElementById("athird").style.backgroundColor="";
						document.getElementById("afourth").style.fontWeight="bold";
						document.getElementById("afourth").style.backgroundColor="#A7D1F3";
						break;
					}
					case (triggerPoint<-1.80):{
						document.getElementById("asecond").style.fontWeight="normal"
						document.getElementById("asecond").style.backgroundColor="";
						document.getElementById("athird").style.fontWeight="bold"
						document.getElementById("athird").style.backgroundColor="#67B9FD";
						document.getElementById("afourth").style.fontWeight="normal"
						document.getElementById("afourth").style.backgroundColor="";
						portfolio.classList.add("skills"); break;
					}
					case (triggerPoint<-0.80):{
						document.getElementById("afirst").style.fontWeight="normal"
						document.getElementById("afirst").style.backgroundColor="";
						document.getElementById("asecond").style.fontWeight="bold"
						document.getElementById("asecond").style.backgroundColor="#3AA6FF";
						document.getElementById("athird").style.fontWeight="normal"
						document.getElementById("athird").style.backgroundColor="";
						portfolio.classList.remove("skills");
						skills.classList.add("skills"); break;
					}
					case (triggerPoint<0.10):{
						document.getElementById("afirst").style.fontWeight="bold"
						document.getElementById("afirst").style.backgroundColor="#038DFF";
						document.getElementById("asecond").style.fontWeight="normal"
						document.getElementById("asecond").style.backgroundColor="";
						skills.classList.remove("skills");
						personal.classList.add("appear"); break;
					}
					
					default: {
						portfolio.classList.remove("skills");
						personal.classList.remove("appear");
						skills.classList.remove("skills"); break;
					}
				}


	})
}
  render() {
    return (
      <div>
	    <Header />
	    <Nav /> 
	    <Main />
	    <Bottom />
      </div>
    );
  }
}

export default App;

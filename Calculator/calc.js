const dis= document.querySelector("input[type='text']");

const buttons_oprd=document.querySelectorAll("button[data-type=operand]");
let is_operator = false;
buttons_oprd.forEach((btn) => {
  btn.addEventListener("click", (e) => {
  	console.log(e.target.value);
    if (dis.value == "0") {
      dis.value = e.target.value;
    } else if (is_operator) {
      is_operator = false;
      dis.value = e.target.value;
    } else if (e.target.value==".") {
    	if(dis.value==""){
    		 dis.value = dis.value + "" + e.target.value.replace(".", "0.");
    	}else if(dis.value.slice(-2)!="" && dis.value.slice(-1)=="."){
    		dis.value=dis.value;
    	}else{
    		dis.value=dis.value+e.target.value;
    	}
    } else{
      dis.value = dis.value + "" + e.target.value;
    }
  });
});

const buttons_opr=document.querySelectorAll("button[data-type=operator]");
buttons_opr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if(e.target.value == "clear"){
    	dis.value="";
    }else if(e.target.value=="Del"){
    	dis.value=dis.value.slice(0,dis.value.length-1);
    }else if(e.target.value=="="){
    	dis.value=eval(dis.value);
    }else if(e.target.value=="("){
    	dis.value=dis.value+"(";
    }else if(e.target.value==")"){
    	dis.value=dis.value+")";
    }else{
    	dis.value = dis.value + "" + e.target.value;
    }
  });
});

// const ele = document.getElementById("buttons");
// ele.addEventListener("ele",myCalc);

// function myCalc(){
// 	const node=document.createElement("h4");
// 	const btn= document.getElementById("button");
//     const box = document.querySelector("input[type='']");
//     node.appendChild(btn);
//     box.appendChild(node);
// }	
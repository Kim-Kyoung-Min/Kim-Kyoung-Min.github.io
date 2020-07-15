
const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("textarea"),
toDoList = document.querySelector(".js-toDoList"),
Menu =document.querySelector(".sideMenu");

const TODOS_LS = 'toDos';

let toDos = [];


//menu hover
function on(x){
    x.style.right="-2000px";
    // x.style.box-shadow =" -16px 11px 149px 86px rgba(0,0,0,0.75)";
    $(".layerBg").css({

    });
}
function no(x){
    x.style.right="-2350px"
}


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //자바스크립트 오브젝트를 스트링으로 바꿔준다.
}


function paintToDo(text){
    const li = document.createElement("li");  //li를 넣는다
    const span = document.createElement("span"); //스판을 넣는다
    const img = document.createElement("IMG"); //이미지를 넣는다
    const newId = toDos.length+1; //아이디값을 +1씩 올린다
    img.src="x.png";  //이미지 소스
    img.width ="25";  //이미지 크기
    
    img.addEventListener("click", deleteToDo); //클릭하면 삭제
    span.innerText = text; 
    li.appendChild(span);   
    li.appendChild(img);
    li.id = newId;
    
    toDoList.appendChild(li);
    const toDoObj = {text: text,id : newId};
    toDos.push(toDoObj);
    saveToDos();
    // if(self.name != 'reload') {
    //     self.name = 'reload';
    //     self.location.reload(true);
    // } else {
    //     self.name = '';
    // }

//listBox style
$("li").css({
"width":"450px",
"background-color":"white",
"list-style":"none",
"padding":"20px 40px",
"font-size":"22px",
"margin":"25px",
"box-shadow":" -1px 10px 32px -15px rgba(0,0,0,0.55)",
"border-radius":"11px 11px 11px 11px",
"border":"0px solid #000000",
"float":"left",
"word-break":"break-all",
});

//delete button
$("img").css({
"float":"right"
});


}

function handleSubmit(event){
    event.preventDefault();
    const currenValue = toDoInput.value;
    paintToDo(currenValue);
    toDoInput.value ="";    
}

function loadToDos(){ //읽어온다
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
       parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
       });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();

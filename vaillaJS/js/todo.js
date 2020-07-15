const toDoForm = document.querySelector(".js-toDoForm"), // js-toDoForm 클래스에 첫번째요소를 가져온다
toDoInput = toDoForm.querySelector("input"),  // input에 첫번째요소를 가져온다
toDoList = document.querySelector(".js-toDoList"); //js-toDoList 클래스에 첫번째요소를 가져온다

const TODOS_LS = 'toDos';  //로컬스트리지안에 넣을 값들을 저장한다 LS=로컬스트리지

let toDos = [];

// 추가한 부분
function reloadEvent(){
    location.reload();
}
// 추가한 부분

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //자바스크립트 오브젝트를 스트링으로 바꿔준다.
}

function paintToDo(text){
    const li = document.createElement("li"); // <li></li>를 넣는다.
    const delBtn = document.createElement("button"); // <button></button>을 넣는다.
    const span = document.createElement("span"); //<span></span>을 넣는다>
    const newId = toDos.length+1; 
    delBtn.innerHTML = "❌";

    // 추가한 부분
    att = document.createAttribute("onclick");
    att.value = "reloadEvent()";
    delBtn.setAttributeNode(att);
    // 추가한 부분
    
    delBtn.addEventListener("click", deleteToDo); //대상객체.addEventListener(이벤트명, 실행할이벤트리스너, 이벤트전파방식)
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currenValue = toDoInput.value; // input에 들어가는 요소들을 currenValue에 담는다. ('2'줄)
    paintToDo(currenValue);
    toDoInput.value ="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); //위('5'줄)에서 만든 TODOS_LS(getItem(가져온다))
    if(loadedToDos !== null){ 
        const parsedToDos = JSON.parse(loadedToDos);
       parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
       });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit) //addEventListener() 메소드는 거의 모든 브라우저에서 지원하는 이벤트 리스너 등록을 위한 메소드입니다.
    //대상객체.addEventListener(이벤트명, 실행할이벤트리스너, 이벤트전파방식)
}
init();

$("#toDoForm").keydown(function(e){
    if(e.keyCode == 13){
        location.reload();
    }
});
const taskInput=document.querySelector(".task-input");
const btn=document.querySelector(".btn");
const list=document.querySelector(".task-list");

btn.addEventListener("click", ()=>{
    if(taskInput.value!="")
    {
const taskText=taskInput.value;
const listItem=document.createElement("li");
listItem.innerHTML= `${taskText} <button class=delete-btn>Delete</button>`

list.appendChild(listItem);
taskInput.value="";
    }
});

list.addEventListener("click", (event)=>{
if(event.target.classList.contains("delete-btn"))
{
    const listItem=event.target.parentElement;
    list.removeChild(listItem);
}
})
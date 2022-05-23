let input= document.querySelector("#Calcius")
let button = document.querySelector(".pluse")
let todos= document.querySelector(".todo ul")

let edit=document.querySelector(".editelement")

let p= document.querySelector('.p')



const addtodo= (text)=>{
 if(text){
 let newtodo=`
    

 <li class="stodo">
 
 <span>${text}</spam> 
 <div class="icon">
 <i class="flaticon-edit  editelement "></i>
 <i class="flaticon-trash dletedtodo"></i>
 

</div>
</li>
 

 
 
 `
 
 todos.innerHTML +=newtodo
 input.value ='';
 }
}
 const editTodo = (text)=>{

    let newtodo = prompt('Edit todo ', text.trim())
    // console.log(newtodo);

    if(!newtodo){

        newtodo = prompt('Edit todo ', text.trim())
    }else{
        return newtodo
    }



 }

todos.addEventListener("click", (e)=>{
    if(e.target.classList.contains("stodo")){
        e.target.classList.toggle("compladetodo")
    }
    if(e.target.nodeName==="SPAN"){
        e.target.classList.toggle("compladetodo")
    }
    
const stodo=document.querySelectorAll(".stodo");

let delate= document.querySelector(".dletedtodo")



//delete the element 
if(e.target.classList.contains("dletedtodo")){
   e.target.parentElement.parentElement.parentElement.remove();

  
  

   
}


//edite element
if(e.target.classList.contains("editelement")){
    // console.log(e.target.parentElement.parentElement.innerText);

   const editedtodo=  editTodo(e.target.parentElement.parentElement.innerText)
   e.target.parentElement.parentElement.innerHTML= `
   
   <span>${editedtodo}</span> 
 <div class="icon">
 <i class="flaticon-edit  editelement "></i>
 <i class="flaticon-trash dletedtodo"></i>
 

</div>
   `
 }






})

button.addEventListener("click",()=> addtodo(input.value) )         
let form=document.getElementById("addForm")
let itemList=document.getElementById("items")
let filter=document.getElementById("filter")
// console.log(filter)
// console.log(itemList)
// console.log(form)
// form.addEventListener("submit",()=>addItems);
form.addEventListener("submit",addItem);
itemList.addEventListener("click",deleteItem)
filter.addEventListener("keyup",filterItem)
function deleteItem(z)
{

    if(z.target.classList.contains("delete"))
    {
        if(confirm("are you sure want to delete it")){
            let li=z.target.parentElement
            itemList.removeChild(li)
        }
        else{
            console.log("Bye")
        }
    }
    // console.log("test",z.target.classList.contains("delete"))
}



function addItem(e)
{
    e.preventDefault();
    // console.log("test")
    let newItem=document.getElementById("item").value
    if(newItem==""){
        alert("Enter the task")
        return;
    }
    // console.log(newItem)
let li=document.createElement("li")  //CREATE HTML TAG IN JS
li.className="list-group-item"
let btn=document.createElement("button")
// console.log(btn)
btn.appendChild(document.createTextNode("X"))
btn.className="btn btn-danger btn-sm float-right delete"
li.appendChild(document.createTextNode(newItem))
li.appendChild(btn)
itemList.appendChild(li)
document.getElementById("item").value=""
// itemList.appendChild(document.createTextNode(newItem))
}


function filterItem(p)
{
    // console.log("filter",p.target.value)
    let text=p.target.value.toLowerCase()
    // console.log(text)
    let items=itemList.getElementsByTagName("li");
    // console.log(items)
    let itemsArray=Array.from(items)
    // console.log(itemsArray)
    itemsArray.forEach(function(himanshu){
        // console.log(himanshu)
        let itemName=himanshu.firstChild.textContent
        //console.log(itemName.toLocaleLowerCase().indexOf(text))
    if(itemName.toLowerCase().indexOf(text)!=-1){
        himanshu.style.display="block"
    }
    else{
        himanshu.style.display="none"
    }
    })

}

// add task 
// remove task
// search task
let form=document.querySelector("#addform")
let tasklist=document.querySelector("#tasks")
let search=document.querySelector("#filter")

// EventListner

// form
form.addEventListener('submit',addtask)
tasklist.addEventListener('click',removetask)
search.addEventListener('keyup',searchtask)

// Addtask function
function addtask(e)
{
    e.preventDefault()
    // fetching data from user input
    let task=document.querySelector("#add-task").value
    let date=document.querySelector("#date").value
    let time=document.querySelector("#time").value   
    if(task==='' ||date==='' || time==='')
    {
        alert("Please Fill All the Details")
    }
    else{

    
    // creating li for new task
    let li=document.createElement("li")
   
    // creating label and button to add on li
     let labeldate=document.createElement("label")
     let labeltime=document.createElement("label")
     let btn=document.createElement("Button")

    //  adding data to label and button
     btn.appendChild(document.createTextNode("Remove"))    
     labeldate.appendChild(document.createTextNode(date))
     labeltime.appendChild(document.createTextNode(time))
    //  adding classes to btn and label and list
    li.className="list-group-item"
    btn.className="btn btn-danger btn-sm float-right delete"
    labeldate.className="btn-sm float-right mylabel margin"
    labeltime.className="btn-sm float-right mylabel margin"
    // adding data to  li
     li.appendChild(document.createTextNode(task))
     li.appendChild(btn)
     li.appendChild(labeltime)
     li.appendChild(labeldate)
    
        // adding li to list(ul)
        tasklist.appendChild(li)
   
        //input field empty
         document.getElementById("add-task").value=''
         document.getElementById("date").value=''
         document.getElementById("time").value=''
    
        }
   
   

}
// delete tsk from list
function removetask(e)
{
    // console.log("clickedon task");
    if(e.target.classList.contains("delete"))
    {
       if(confirm("Remove Task From List"))
       {
        tasklist.removeChild(e.target.parentElement)
       }
    }
    else{
        alert("Click On Remove To Delete")
    }

}
// Search task
function searchtask(e)
{
  
    let text=e.target.value.toLowerCase();
    let tasks=document.querySelectorAll("li")
    // for each loop to access all values from li
    Array.from(tasks).forEach(function(task){
        let taskname=task.firstChild.textContent;
        
        
        if(taskname.toLowerCase().indexOf(text)!=-1)
        {
            task.style.display='block';
        }
        else{
            task.style.display="none";
        }
    })
    
    


}
        let input = document.getElementById("input");
        let button=document.getElementById("add");
        let todolist=document.getElementById("todolist");

        let todoArr=[];

        button.addEventListener('click',()=>{
            todoArr.push(input.value)
            addTodo(input.value);
            input.value = '';
        })

        function addTodo(todo){
            let para = document.createElement('p');
            para.innerText = todo;
            todolist.appendChild(para);

            para.addEventListener('click',()=>{
                para.style.textDecoration='line-through';
            })

            para.addEventListener('dblclick',()=>{
                todolist.removeChild(para);                
            })

        }
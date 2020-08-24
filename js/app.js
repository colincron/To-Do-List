function init(){
    console.log('Init the to do app');
    //sense the events here, click event
    $('#btn-add').click(addToDo);
    $('#txt-task').keypress(function(e) {
        if(e.key==="Enter"){
            addToDo();
        }
    });
    console.log('init ran');
};

function getInfo(){
    var txtInput = document.getElementById('txt-task').value;
    var todo={
        text:txtInput,
        user:"Colin"
    };
    return todo.text;
}


function addToDo(){
    let txtIn = getInfo();
    if(txtIn === ""){
        alert('no empty')
    }else{
        let pending = document.getElementById('pending-list')
        let htmlText = `<li>${txtIn}<button id="btn-Done">Done</button></li>`
        pending.innerHTML += htmlText;
        document.getElementById('txt-task').value = '';
        $('#btn-Done').click(moveToPending); //only works the first time, but E.L. works!
        return;
    }
    $("#txt-task").focus();
    console.log('addToDo Ran');
}

function moveToPending(){
    console.log('moveToPending running');
}

window.onload=init;

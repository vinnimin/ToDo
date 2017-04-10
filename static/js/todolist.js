function addTask(){
    var task = document.getElementById("taskInput").value;

    if(task != ""){
        var li = document.createElement("li");
        var textLi = document.createTextNode(task);
        li.appendChild(textLi);
        document.getElementById("ul-taskList").appendChild(li);
    }else{
        $("#taskInput").attr("placeholder","Hey! You can't do nothing!");
    }
    document.getElementById("taskInput").value = "";


    var checkButton = document.createElement("button");
    var checkButtonTxt = document.createTextNode("Check");
    checkButton.className = "btn buttons checkTask";
    checkButton.name = "status";
    checkButton.appendChild(checkButtonTxt);
    li.appendChild(checkButton);


    var closeButton = document.createElement("button");
    var closeButtonTxt = document.createTextNode("Finish");
    closeButton.className = "btn btn-danger buttons closeTask";
    closeButton.appendChild(closeButtonTxt);
    li.appendChild(closeButton);


    $(".closeTask").click(function(){
        $(this).parent().remove();
    });


    checkTask = document.getElementsByClassName("checkTask");
    for (i = 0; i < checkTask.length; i++) {
        checkTask[i].onclick = function() {
            if($(this).parent().hasClass("taskDone")){
                $(this).parent().removeClass("taskDone");
                $(this).removeClass('btn-success');
            }else{
                $(this).parent().addClass("taskDone");
                $(this).addClass('btn-success');
            }
        }
    } 
}



$(document).ready(function() {
	$('#btn-addTask').click(function(event) {
		$.ajax({
			data : {
				taskName : $('#taskInput').val(),
                taskStatus : 'false'
			},
			type : 'POST',
			url : '/addTask'
		})
		.done(function(data) {
			if (data.error) {
                errorPlace();
			}
			else {
                addTask();
			}
		});
		event.preventDefault();
	});
});

function errorPlace(){
    $("#taskInput").attr("placeholder", "Hey! You can't do nothing!");    
}

function addTask(){
    var task = document.getElementById("taskInput").value;
    
    //
    var li = document.createElement("li");
    li.className = "li-task";
    document.getElementById("ul-taskList").appendChild(li);

    //
    var divTask = document.createElement("div");
    divTask.className = "divTaskText";
    li.appendChild(divTask);

    //
    var taskIcon = document.createElement("span");
    taskIcon.className = "glyphicon glyphicon-pushpin task-icon";
    divTask.appendChild(taskIcon);

    //
    var textLi = document.createTextNode(task);
    divTask.appendChild(textLi);

    //Container Buttons
    var div = document.createElement("div");
    div.className = "btn-group btn-task";
    div.setAttribute("role", "group");
    div.setAttribute("style", "float: right");
    li.appendChild(div);

    //Check Task Button
    var checkButton = document.createElement("button");
    var checkIcon = document.createElement("span");
    checkIcon.className = "glyphicon glyphicon-check";
    checkButton.appendChild(checkIcon);
    var checkButtonTxt = document.createTextNode("  Check");
    checkButton.className = "btn checkTask";
    checkButton.setAttribute("type", "button");
    checkButton.appendChild(checkButtonTxt);
    div.appendChild(checkButton);

    //Close Task Button
    var closeButton = document.createElement("button");
    var closeButtonTxt = document.createTextNode("Finish");
    closeButton.className = "btn btn-danger closeTask";
    closeButton.setAttribute("type", "button");
    closeButton.appendChild(closeButtonTxt);
    div.appendChild(closeButton);


   /* closeTask = document.getElementsByClassName("closeTask");
    for (i = 0; i < closeTask.length; i++) {
        closeTask[i].onclick = function() {
            
        }
    }*/
    $(".closeTask").click(function(){
        $.ajax({
            data : {
                taskName : task
            },
            type : 'POST',
            url : '/deleteTask'
        });
        event.preventDefault();
        $(this).parent().parent().remove();
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
    
    document.getElementById("taskInput").value = "";
}



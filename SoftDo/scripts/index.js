/// NOTE: The comment sections inside the index.html file are some examples of the structure the elements should take when you code them in..
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution(){
    let sendToPending = document.getElementsByTagName("button")[0];

    sendToPending.addEventListener("click",function(){
        let text = document.getElementsByTagName("textarea")[0].value;
        let nameInput = document.getElementsByTagName("input")[0].value;

        if(text != ""){
            if(nameInput == ""){
                nameInput = "Anonymous";
            }
            let pendingQuestionDiv =document.createElement("div");
            pendingQuestionDiv.classList.add("pendingQuestion");
            
            let img = document.createElement("img");
            img.setAttribute("src","./images/user.png");
            img.setAttribute("width",32);
            img.setAttribute("height",32);
            pendingQuestionDiv.append(img);

            let username = document.createElement("span");
            username.textContent = nameInput;
            pendingQuestionDiv.append(username);

            let question = document.createElement("p");
            question.textContent = text;
            pendingQuestionDiv.append(question);

            let actions = document.createElement("div");
            actions.classList.add("actions");
            
            let archive = document.createElement("button");
            archive.classList.add("archive");
            archive.addEventListener("click",function(){
                pendingQuestionDiv.remove();
            });
            archive.textContent = "Archive";
            actions.append(archive);

           
            let open = document.createElement("button");
            open.classList.add("open");
            open.addEventListener("click",function(){
                pendingQuestionDiv.remove();
                pendingQuestionDiv.classList.remove("pendingQuestion");
                pendingQuestionDiv.classList.add("openQuestion");
                
                actions.removeChild(open);
                actions.removeChild(archive);

                let reply = document.createElement("button");
                reply.classList.add("reply");
                reply.textContent = "Send";
                actions.append(reply);
                reply.addEventListener("click",function(){
                    if(reply.textContent == "Send"){
                        replySection.style.display = "block";
                        reply.textContent = "Back";
                    }else{
                        replySection.style.display = "none";
                        reply.textContent = "Send";   
                    }
                });

                let replySection = document.createElement("div");
                replySection.classList.add("replySection");
                replySection.style.display = "none";
                pendingQuestionDiv.append(replySection);

                let replyInput = document.createElement("input");
                replyInput.classList.add("replyInput");
                replyInput.setAttribute("type","text");
                replyInput.setAttribute("placeholder","Reply to this question here...");
                replySection.append(replyInput);
                
                let replyButton = document.createElement("button");
                replyButton.classList.add('replyButton');
                replyButton.textContent = "Send";
                replyButton.addEventListener("click",function(){
                    let answer = replyInput.value;
                    
                    let li = document.createElement("li");
                    li.textContent = answer;

                    replyList.append(li);

                });
                replySection.append(replyButton);

                let replyList = document.createElement("ol");
                replyList.classList.add("reply");
                replyList.setAttribute("type",'1');
                replySection.append(replyList);

                document.getElementById("openQuestions").append(pendingQuestionDiv);

            });
            open.textContent = "Open";
            actions.append(open);

            pendingQuestionDiv.append(actions);

            document.getElementById("pendingQuestions").append(pendingQuestionDiv);
        }

    });
}

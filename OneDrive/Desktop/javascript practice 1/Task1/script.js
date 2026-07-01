

function showMessage() {

    let items = ["login","Email","Meeting in 10 min","New Messages"];
    let box = document.getElementById("message");
    box.innerHTML="";

    let i = 0;
    function nextMessage(){
        if( i < items.length) {
            box.innerHTML += items[i] + "<br>";
            i++;
            setTimeout(nextMessage, 2000);
        }
    }
    nextMessage();

}


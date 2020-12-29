/* name : Jarikre Efe
   Student number: 101008461
 */


window.addEventListener("load", function() { document.getElementById('hide').style.visibility = 'hidden'; });

function button_handler() {

//controls the toggle of the button
var hidden = false;

hidden = !hidden;

    if(hidden) {
        document.getElementById('highlight').style.visibility = 'hidden';
        document.getElementById('hide').style.visibility = 'visible';
    }

      document.querySelectorAll("*").forEach(function(node) {
// check if it is an element node
          if (node.nodeType == 1) {

            var node_child = document.createElement("SPAN");
            var textnode = document.createTextNode(node.nodeName);
            node_child.classList.add("hoverNode");
            node_child.appendChild(textnode);
            node.appendChild(node_child);
            // event listener to bring up alert
            node_child.addEventListener("click",
              function(e) {
                alert(" This Page says: \n Tag:" +
                  node_child.parentNode.tagName + "\n" +
                  "Class: " + node_child.parentNode.className + "\n" +
                  "ID: " + node_child.parentNode.id + "\n" +
                  "InnerHTML: " + node_child.parentNode.innerHTML + "\n");

              })

          }}


        )



  }

// handler for hide
  function hide_handler(){

    var hidden = false;

    hidden = !hidden;

        if(hidden) {
            document.getElementById('hide').style.visibility = 'hidden';
            document.getElementById('highlight').style.visibility = 'visible';
        }
        var highlight_remove = document.getElementsByClassName("hoverNode");
        while(highlight_remove.length > 0 ){

          highlight_remove[0].parentNode.removeChild(highlight_remove[0]);

        }


  }

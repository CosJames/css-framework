
mod_select();

// Select Attribute
function mod_select() {
    let x = document.getElementsByClassName("select-tool");

    for (let i = 0; i < x.length; i++) {
        let selElmnt = x[i].getElementsByTagName("select")[0];
        let a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);

        let b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        for (let j = 1; j < selElmnt.length; j++) {
            
            let c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;

            c.addEventListener("click", function(e) {
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
        b.appendChild(c);
        }
    x[i].appendChild(b);

        a.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
            arrNo.push(i)
            } else {
            y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
            }
        }
    }
    document.addEventListener("click", closeAllSelect);
}

// For modals
let modal = (function(){
    "use strict";

    let $ = {};

    $.deploy = function(modalId, isCancellable) {
        var modals = document.getElementById(modalId);
        var span = document.getElementsByClassName("close");

        modals.style.display = "block";

        for(let i = 0; i < span.length; i++) {
            span[i].addEventListener("click", function() {
                modals.style.display = "none";
            })
        }
    
        window.onclick = function(event) {
            if(isCancellable == true) {
                if (event.target == modals) {
                    modals.style.display = "none";
                }
            }
        }
    }

    $.destroy = function(modalId) {
        var modals = document.getElementById(modalId);

        modals.style.animation = "fadeOut 0.5s ease-in-out"
        setTimeout(function() {
            modals.style.animation = ""
            modals.style.display = "none";
        }, 500)
    }



    return $;
})()

// Navigation Bar editing
var navbar = (function(){
    "use strict";

    let $ = {};

    $.bottomBorderOnScroll = function(top, ClassOriginalState, ClassScrollState){
        window.onscroll = function() {
            if (document.body.scrollTop > top || document.documentElement.scrollTop > top) {
                document.getElementsByClassName("navbar")[0].className = ClassScrollState;
            } else {
                document.getElementsByClassName("navbar")[0].className = ClassOriginalState;
            }
        }
    }

    return $;
})()


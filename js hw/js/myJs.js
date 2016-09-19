/* Removes the hide class to show hidden div */
    function changeClass() {

        var dogo = document.getElementById("doggies");
        dogo.classList.remove('hide');
            }

    function btnClick() {
        var btn = document.getElementById("dogs");
        btn.addEventListener("click", changeClass, false);
        btn.addEventListener("click", function dogBG(){
        document.body.style.backgroundImage = "url('images/dogs.gif')";
            });
                             }
btnClick();



/* on hover changes cat text to dog text */
    function catsHover(){
        var catBtn = document.getElementById("cats");
        catBtn.addEventListener("mouseover", function changeTxt(){
        catBtn.innerHTML = "Dogs";
        });
 
/* on mouse out turns back into Cats text */
        catBtn.addEventListener("mouseout", function changeTxt(){
        catBtn.innerHTML = "Cats";
       
        });
    }
/*button click for cats button */
function btnClickCats() {
        var btn = document.getElementById("cats");
        btn.addEventListener("click", changeClass, false);
        btn.addEventListener("click", function dogBG(){
        document.body.style.backgroundImage = "url('images/dogs.gif')";

            });
                             }
btnClickCats();
catsHover();
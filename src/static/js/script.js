/* ------------------- show-preview-to-bit-img ------------------- */

    var modelChoiceItems = document.querySelectorAll(".it-card__model-checkbox-pseudo");
    var modelBigImg = document.querySelector("[data-model-big-img]");

    for (var i = 0; i < modelChoiceItems.length; i++) {

        var modelChoiceItem = modelChoiceItems[i];
             modelChoiceItem.onclick = function(e) {

            var modelChoiceImg = this.querySelector("[data-model-img]");
            var modelChoiceImgValue = modelChoiceImg.getAttribute("src");

            modelBigImg.setAttribute("src", modelChoiceImgValue);

        };
    }

/* ------------------- counter-number ------------------- */

var signMinus = document.querySelector("[data-sign-minus]");
var signPlus = document.querySelector("[data-sign-plus]");
var signNumber = document.querySelector("[data-sign-value]");

if (signNumber && signMinus && signPlus) {

    signNumber.oninput = function () {
        this.value = this.value.replace(/\D/g, '');
        countPrice();
    };

    signMinus.onclick = function () {

        if (signNumber.value >= 2) {
            var signValueCheange = --signNumber.value;
            signNumber.setAttribute("value", signValueCheange);
            countPrice();
        }
    };

    signPlus.onclick = function () {
        var signValueCheange = ++signNumber.value;
        signNumber.setAttribute("value", signValueCheange);
        countPrice();
    };

}
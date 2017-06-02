/**
 * Created by axel.johansson2 on 2017-05-30.
 */
function add() {
    var elements = document.querySelectorAll('.efter')
    elements.forEach(function (element) {
        element.classList.toggle('innan');
    });
}
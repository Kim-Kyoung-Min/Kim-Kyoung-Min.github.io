/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function themeMenuClick() {
    document.getElementById("userDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-theme");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$(document).ready(function () {
    load_setting();
    apply_data();
    default_bg();
    black();
    grey();
    navy();
});

function default_bg() {
    $("#bg-default").click(function () {
        let change = confirm('변경 하시겠습니까?');

        if (change) {
            localStorage.removeItem('bg_color');
            window.location.reload();
            
        }
    });
}

function black() {
    $("#bg-black").click(function () {
        let change = confirm('변경 하시겠습니까?');
        if (change) {
            $('html, body').css('background', 'black');
            localStorage.setItem('bg_color', "black");
            alert("블랙으로 변경되었습니다.");
        }
    });
}


function grey() {
    $("#bg-grey").click(function () {
        change = confirm('변경 하시겠습니까?');
        if (change) {
            $('html, body').css('background', 'rgb(44, 44, 44)');
            localStorage.setItem('bg_color', "rgb(44, 44, 44)");
            alert("회색으로 변경되었습니다.");
        }
    });
}

function navy() {
    $("#bg-navy").click(function () {
        change = confirm('변경 하시겠습니까?');
        if (change) {
            $('html, body').css('background', 'rgb(10, 10, 66)');
            localStorage.setItem('bg_color', "rgb(10, 10, 66)");
            alert("남색으로 변경되었습니다.");
        }

    });
}
function load_setting() {
    var bgcolor = localStorage.getItem('bg_color');
    $('#bg_color').val(bgcolor);
    //스타일 반영
    apply_data();
}
//설정정보 반영
function apply_data() {
    $('body').css('background', $('#bg_color').val());
}
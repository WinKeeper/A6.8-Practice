let progressBar = $('.progress-bar');
let progressBarWidth = $('.progress').width();
let currentProgressBarWidth = 0;

$("#one-percent").click(function(one) {
    progressBar.width(currentProgressBarWidth + progressBarWidth*0.01);
    currentProgressBarWidth += progressBarWidth*0.01;
    console.log("Текущее значение", currentProgressBarWidth);
});
$("#three-percent").click(function(one) {
    progressBar.width(currentProgressBarWidth + progressBarWidth*0.03);
    currentProgressBarWidth += progressBarWidth*0.03;
    console.log("Текущее значение", currentProgressBarWidth);
});
$("#seven-percent").click(function(one) {
    progressBar.width(currentProgressBarWidth + progressBarWidth*0.07);
    currentProgressBarWidth += progressBarWidth*0.07;
    console.log("Текущее значение", currentProgressBarWidth);
});

// $("#one-percent").click(function(one) {
//     currentProgressBarWidth += progressBarWidth*0.01;
//     console.log("Текущее значение", currentProgressBarWidth);
//     progressBar.width(currentProgressBarWidth + progressBarWidth*0.01)
//     console.log(currentProgressBarWidth + progressBarWidth*0.01);
// });
// $("#three-percent").click(function(one) {
//     currentProgressBarWidth += progressBarWidth*0.03;
//     console.log(currentProgressBarWidth);
//     progressBar.width(currentProgressBarWidth + progressBarWidth*0.03)
//     console.log(progressBar);
// });
// $("#seven-percent").click(function(one) {
//     currentProgressBarWidth += progressBarWidth*0.07;
//     console.log(currentProgressBarWidth);
//     progressBar.width(currentProgressBarWidth + progressBarWidth*0.07)
//     console.log(progressBar);
// });




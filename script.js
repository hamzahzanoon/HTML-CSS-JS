let potions = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {gradient: ["#a445b2", "#fa4299"]}, 
};

$(".circle .bar").circleProgress(potions).on('circle-animation-progress',
   function(event, Progress, stepValue){
    $(this).parent().find("span").text(string(stepValue.toFixed(2).substr(2)) + "%");
});

$(".js .bar").circleProgress({
    value: 0.70,
});

$(".react .bar").circleProgress({
    value: 0.60,
});
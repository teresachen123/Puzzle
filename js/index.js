/**
 * Created by Administrator on 2018/1/15 0015.
 */
$(function () {
    var divs = $('.box div');
    var posData = [];
    for (var i = 0; i < divs.length; i++) {
        var left = $(divs[i]).position().left;
        var top = $(divs[i]).position().top;
        var posObj = {left: left, top: top};
        posData.push(posObj);           //{left: 100, top: 0}
    }

    var dirR = 1;
    var dirD = 1;
    divs.swipeRight(function () {
        dirR = 1;
        var index = $(this).index();
        var tempL = $(this).position().left;
        var tempT = $(this).position().top;
        tempL += 100*dirR;
        if (tempL <= 200) {
            for (var i = 0; i < posData.length; i++) {
                var x = posData[i].left;
                var y = posData[i].top;
                if (tempL == x && tempT == y) {
                    return;
                }
            }
            $(this).stop().animate({
                left: tempL
            })
            posData.splice(index, 1, {left: tempL, top: tempT});

        } else {
            return;
        }
    })
    divs.swipeLeft(function(){
        dirR = -1;
        var index = $(this).index();
        var tempL = $(this).position().left;
        var tempT = $(this).position().top;
        tempL += 100*dirR;
        if(tempL >= 0){
            for (var i = 0; i < posData.length; i++) {
                var x = posData[i].left;
                var y = posData[i].top;
                if (tempL == x && tempT == y) {
                    return;
                }
            }
            $(this).stop().animate({
                left: tempL
            })
            posData.splice(index, 1, {left: tempL, top: tempT});
        }else {
            return;
        }
    })
    divs.swipeUp(function(){
        dirD = -1;
        var index = $(this).index();
        var tempL = $(this).position().left;
        var tempT = $(this).position().top;
        tempT += 100*dirD;
        if(tempT >= 0){
            for (var i = 0; i < posData.length; i++) {
                var x = posData[i].left;
                var y = posData[i].top;
                if (tempL == x && tempT == y) {
                    return;
                }
            }
            $(this).stop().animate({
                top: tempT
            })
            posData.splice(index, 1, {left: tempL, top: tempT});
        }else {
            return;
        }
    })
    divs.swipeDown(function () {
        dirD = 1;
        var index = $(this).index();
        var tempL = $(this).position().left;
        var tempT = $(this).position().top;
        tempT += 100*dirD;
        if(tempT <= 200){
            for (var i = 0; i < posData.length; i++) {
                var x = posData[i].left;
                var y = posData[i].top;
                if (tempL == x && tempT == y) {
                    return;
                }
            }
            $(this).stop().animate({
                top: tempT
            })
            posData.splice(index, 1, {left: tempL, top: tempT});
        }else {
            return;
        }
    })
})


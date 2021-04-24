


/*
    防抖函数  主要用于节省资源   常用于搜索   只要还在输入就会触发
    古代通信不发达   打仗时的信息传输可以用信鸽  
    但是每说一句话都发一个信鸽的话就会很频繁
    所有就出现了防抖  在2小时内没有新消息就发出去  
        如果在这个时间内有消息的话就再等2小时 
        如果在这个时间没有消息的话就发出去
*/ 
/*
    用法：
        document.getElementById('input').oninput = fangdou(callback,1000)
        function callback(e){console.log(e.target.value)}
*/ 

/**
 * 防抖函数  
 * fn  所需要防抖的函数
 * wait 多少时间内
 */
function fangdou(fn,wait){
    let timer = null;
    return function(...arg){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...arg)
        }, wait);
    }
}

/*
    节流函数  主要用于节省资源   常用于滚动栏节流   只要还在滚动就会触发
    古代通信不发达   打仗时信息传输可以用信鸽  
    但是每说一句话都发一个信鸽的话就会很频繁
    所有就出现了节流  
        只要还在打仗就会一直触发这个机制
        每天都会讲新消息传给后方 
*/ 
/*
    用法：
        document.getElementById('input').oninput = fangdou(callback,1000)
        function callback(e){console.log(e.target.value)}
*/ 

/**
 * 节流函数  
 * fn  所需要防抖的函数
 * wait 多少时间内
 */
function jieliu(fn,wait){
    let timer = null;
    return function(...arg){
        if(!timer){
            timer = setTimeout(()=>{
                fn(...arg)
                timer = null;
            },wait)
        }
    }
}


export {
    fangdou,
    jieliu
}
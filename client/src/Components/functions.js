export function convertCount(num){
    if(num == 0){
        return " "
    }else if(num <= 999){
        return num.toString()
    }else if(num >= 1000 && num <=1000000){
        if((num/1000).toFixed(1) == Math.floor(num/1000)){
            return Math.floor(num/1000).toString() + "K"
        }else{
            return (num/1000).toFixed(1).toString() + "K"
        }
    }else{
        if((num/1000000).toFixed(1) == Math.floor(num/1000000)){
            return Math.floor(num/1000000).toString() + "M"
        }else{
            return (num/1000000).toFixed(1).toString() + "M"
        }
    }
}

export function convertDate1(date){
    var map = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec",
    }
    var year = date.slice(0,4)
    var month = map[date.slice(5,7)]
    var day = date.slice(8,10)
    return(month + " " + day + ", " + year)
}

export function convertDate2(publishedDate){
    var prevTime = new Date(publishedDate)
    var thisTime = new Date()
    var diff = ((thisTime.getTime() - prevTime.getTime()) / 1000) - 28800

    const map = {
        "year": 31536000,
        "month": 2628288,
        "week": 604800,
        "day": 86400,
        "hour": 3600,
        "minute": 60
    }

    const answer = {
        "year": 0,
        "month": 0,
        "week": 0,
        "day": 0,
        "hour": 0,
        "minute": 0
    }

    for(const [key, value] of Object.entries(map)){
        while(diff >= value){
            diff -= map[key]
            answer[key] += 1
        }
        if(answer[key] != 0){
            if(answer[key] == 1){
                return `${answer[key]} ${key} ago`
            }else{
                return `${answer[key]} ${key}s ago`
            }
        }
    }
}

export function parseHtmlEntities(str) {
    str = str.replace("&amp;", "&")
    return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
        var num = parseInt(numStr, 10)
        return String.fromCharCode(num)
    })
}
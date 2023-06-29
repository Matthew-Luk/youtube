/*export function convertCount(num){
    if(num == 0){
        return " "
    }else if (num <= 999){
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
    var current = new Date()
    var cdate = new Date(current.getFullYear(), current.getMonth(), current.getDate(), current.getHours())
    var csec = Math.floor( cdate / 1000 ) - 28800;

    var publishedDate = new Date(publishedDate)
    var pdate = new Date(publishedDate.getFullYear(), publishedDate.getMonth(), publishedDate.getDate(), publishedDate.getHours())
    var psec = Math.floor( pdate / 1000 );

    var diff = csec - psec
    console.log("Working")
    const map = {
        "year": 31536000,
        "month": 2628288,
        "week": 604800,
        "day": 86400,
        "hour": 3600
    }
    const answer = {
        "year": 0,
        "month": 0,
        "week": 0,
        "day": 0,
        "hour": 0
    }
    for(const [key, value] of Object.entries(map)){
        while(diff >= value){
            diff -= map[key]
            answer[key] += 1
        }
    }
    for(const [key, value] of Object.entries(answer)){
        if(value == 1){
            return `${value} ${key} ago`
        }else if(value > 1){
            return `${value} ${key}s ago`
        }
    }
}*/

function convertDate3(publishedDate){
    var prevTime = new Date(publishedDate)
    var thisTime = new Date()

    console.log(prevTime)
    console.log(thisTime)
    var diff = (thisTime.getTime() - prevTime.getTime()) / 1000
    console.log(diff)

    const map = {
        "year": 31536000,
        "month": 2628288,
        "week": 604800,
        "day": 86400,
        "hour": 3600
    }
}

convertDate3("2023-06-29T05:36:46.976Z")
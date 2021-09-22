const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
]

function superbowlWin(record) {
    let found = record.find(elem => elem.result === "W")
    //return !!found? found.year:undefined;
    if (!!found){
        return found.year
    }
    else {
        return undefined
    }
    
}

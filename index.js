function superbowlWin(record){
    let win = record.find(element => element.result == "W") 
    if (win == undefined) {
        return undefined
    }

    else {
        return win.year
    }
}



const DB = {
    admin : [],
    users : [],
    user_reports: [],
    rooms : {
        teens : [{roomCount: 0}, {members:[]}, {forum: []}],
        adults: [{roomCount: 0}, {members:[]}, {forum: []}],
        soccer: [{roomCount: 0}, {members:[]}, {forum: []}],
        gists : [{roomCount: 0}, {members:[]}, {forum: []}]
    }
}


module.exports = DB;
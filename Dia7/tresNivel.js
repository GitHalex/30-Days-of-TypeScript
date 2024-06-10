var userIdGenerator = function (numberOfIds, idLength) {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var ids = [];
    for (var i = 0; i < numberOfIds; i++) {
        var id = "";
        for (var j = 0; j < idLength; j++) {
            var charRandom = Math.floor(Math.random() * characters.length);
            id += characters[charRandom];
        }
        ids.push(id);
    }
    return ids;
};
console.log(userIdGenerator(5, 6)); // Genera 5 IDs de longitud 6
console.log(userIdGenerator(5, 16)); // Genera 5 IDs de longitud 16

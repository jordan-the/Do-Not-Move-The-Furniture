
var PermissionEnum = {
    NORMAL: 1,
    ADMIN: 2
}

class Person{
    constructor(firstName, lastName, collectionID){
        this.firstName = firstName,
        this.lastName = lastName,
        this.collectionID = collectionID
    }
}


class User {
    constructor(firstName, lastName, collectionID, permission) {
        Person.call(this, firstName, lastName, collectionID),
            this.permission = permission;
    }
    getCollections(){
        return this.collectionID;
    }
}


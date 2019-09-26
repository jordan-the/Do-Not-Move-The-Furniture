class Artifact{
    constructor(title, description, dateAdded, owner, previousOwner, imagePath){
        this.title  = title;
        this.description = description;
        this.dateAdded = dateAdded;
        this.owner = owner;
        this.previousOwner = previousOwner;
        this.imagePath = imagePath
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        this.title = title;
        return;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description){
        this.description = description;
        return;
    }

    addPreviousOwner(prevOwner){
        this.previousOwner.push(prevOwner);
    }

    setOwner(owner){
        this.owner = owner;
    }
}
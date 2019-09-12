import RequestManager from './RequestManager.js';

class Collection{
    constructor(id, name, members, admins, artifacts, catagories, catagoryRs, userRs, artifactRs){
        this.id = id;
        this.name = name;
        this.members = members;
        this.admins = admins;
        this.artifacts = artifacts;
        this.catagories = catagories;
        this.requests = new RequestManager(catagoryRs, userRs, artifactRs);
    }

    checkAdmin(user){
        return (admins.find(admin => admin.person == user));
    }

    getCatagories(){
        return this.catagories;
    }

    addCatagories(user,name){
        if(checkAdmin(user)){
            this.catagories.push(name);
        }else{
            requests.addCatagories(name);
        }
    }

    getpeople(){
        return this.People;
    }
    
    addperson(user,person){
        if(checkAdmin(user)){
            this.people.push(name);
        }else{
            requests.addUser(person);
        }
    }

    makeAdmin(user,admin){
        if(checkAdmin(user)){
            admins.push(admin);
            for(member in members){
                if(member == admin){
                    delete member
                }
            }
        }else{
            requests.addAdmin(admin);    
        }
    }

    editName(user, name){
        if(checkAdmin(user)){
            this.name = name;
        }
        return;
    }

    addArtifact(user,artifact){
        if(checkAdmin(user)){
            this.artifacts.push(artifact);
            for(catagory in artifact.getCatagories()){
                if(catagories.find(catagory => catagory.name != artifact.getName()) == undefined){
                    catagories.push(catagories);
                }
            }
        }else{
            requests.addArtifact(artifact);
        }
        return;
    }

    removeArtifact(artifact){
        if(checkAdmin(user)){
            for(arti in artifacts){
                if(arti == artifact){
                    delete arti;
                    break;
                }
            }
        }
    }

    editArtifact(artifact,edit){
        if(checkAdmin(user)){
            for(arti in artifacts){
                if(arti == artifact){
                    arti = edit;
                }
            }
        }
    }

    getArtifactImage(num){
           for(i=0;i<num;i++){
               artifacts[i].getImagePath()[0];
           }
    }

}
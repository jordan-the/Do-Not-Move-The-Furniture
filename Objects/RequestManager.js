class RequestManager{
    constructor(catagoryRs, artifactRs, userRs){
        this.catagoryRequests = catagoryRs;
        this.artifactRequests = artifactRs;
        this.userRs = userRs;
    }

    addCatagory(name){
        catagoryRequests.push(name);
        return;
    }

    rmvCatagory(cataRequest){
        for(catars in catagoryRequests){
            if(catars == cataRequest){
                delete catars;
            }
        }
    }

    addArtifact(ArtifactR){
        this.artifactRequests.push(ArtifactR);
        return;
    }

    rmvArtifact(artiRequest){
        for(artirs in catagoryRequests){
            if(artirs == artiRequest){
                delete artirs;
            }
        }
    }

    addUser(userR){
        this.userRs.push(userR);
    }

    rmvUser(userRequest){
        for(userrs in userRequests){
            if(userrs == userRequest){
                delete userrs;
            }
        }
    }

}
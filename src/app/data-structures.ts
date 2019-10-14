export class Artifact {
    _id: string;    
    name: String;
    description: String;
    time: String;
    //year,month,date
    currentLocation: String;
    originLocation: String;
    familyId: String;
}

export class FamilyMember {
    id: number;
    familyId: number;
    firstName: string;
    lastName: string;
}

export class Category {
    id: number;
    name: string;
}

export class Image {
    hostId: String;
    url: String;
    artifactId: String;
}
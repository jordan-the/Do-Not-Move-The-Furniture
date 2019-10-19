export class Artifact {
    _id: String;
    name: String;
    description: String;
    time: String;
    //year,month,date
    primaryImage: String;
    category: String;
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
    _id: string;
    name: string;
}

export class Image {
    hostId: String;
    url: String;
    artifactId: String;
}

export class Msg {
    message: String;
}
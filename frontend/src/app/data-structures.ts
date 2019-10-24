export class Artifact {
    _id: String;
    name: String;
    description: String;
    year: String;
    month: String;
    day: String;
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

export class ArtifactCategoryRelationship {
    artifactId: String;
    categoryId: String;
}

export class Image {
    hostId: String;
    url: String;
    artifactId: String;
}

export class Msg {
    message: String;
}

export interface User {
    id: String,
    name: String;
    password: String;
    email: String;
}

export interface Family {
    id: String;
    name: String;
    bday: Date;
}
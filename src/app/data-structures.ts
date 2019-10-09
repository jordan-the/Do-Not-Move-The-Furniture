export class Artifact {
    id: number;
    name: string;
    imgURL: string;
    information: string;
    dates: string[];
    associatedPeople: number[];
    categories: number[];
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
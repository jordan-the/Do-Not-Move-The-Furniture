export class Artifact {
  id: number;
  name: string;
  imgURL: string;
  information: string;
  associatedPeople: number[];
}

export class FamilyMember {
  id: number;
  familyId: number;
  firstName: string;
  lastName: string;
}
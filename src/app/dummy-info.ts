import { Artifact, FamilyMember } from './data-structures';

export const DUMMYARTIFACTS: Artifact[] = [
  {id: 1, name: "Mona Lisa", imgURL: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", information: "Hey it's the Mona Lisa", associatedPeople: [1]},
  {id: 2, name: "Ancient Urn", imgURL: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Geometric_Cremation_urn_Athens_Agora_Museum.jpg", information: "This urn is real old", associatedPeople: [1, 2]},
]

export const DUMMYFAMILY: FamilyMember[] = [
  {id: 1, familyId: 1, firstName: "Bob", lastName: "Smith"},
  {id: 2, familyId: 1, firstName: "Jane", lastName: "Smith"},
]
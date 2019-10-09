import { Artifact, FamilyMember, Category } from './data-structures';

export const DUMMYARTIFACTS: Artifact[] = [
  {
    id: 1,
    name: "Mona Lisa",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    information: "Hey it's the Mona Lisa",
    dates: ["1/1/2000: Made", "2/2/2000: Acquired"],
    associatedPeople: [1],
    categories: [1, 3]
  },
  {
    id: 2,
    name: "Ancient Urn",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Geometric_Cremation_urn_Athens_Agora_Museum.jpg",
    information: "This urn is real old",
    dates: ["1/2/2000: Created", "31/12/2019: Sold", "40/13/10000: Destroyed by aliens"],
    associatedPeople: [1, 2],
    categories: [2, 3]
  },
]

export const DUMMYFAMILY: FamilyMember[] = [
  {id: 1, familyId: 1, firstName: "Bob", lastName: "Smith"},
  {id: 2, familyId: 1, firstName: "Jane", lastName: "Smith"},
]

export const DUMMYCATEGORIES: Category[] = [
  {id: 1, name: "Painting"},
  {id: 2, name: "Pottery"},
  {id: 3, name: "Old"}
]

export type Coords = [number,number]

export default interface FileContents {
    type: string;
    coordinates: Coords[][][]
  }
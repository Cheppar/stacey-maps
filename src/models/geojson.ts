
export type Coords = [number,number]

export default interface GeoJSON {
    type: string,
    city: string,
    coordinates: Coords[][][]
}
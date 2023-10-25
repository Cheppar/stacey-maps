
export default interface MapViewState {
    altitude?: number,
    bearing?: number,
    height?: number,
    width?: number,
    latitude: number,
    longitude: number,
    maxPitch?: number,
    maxZoom?: number,
    zoom: number,
    pitch: number,
    minPitch?: number,
    minZoom?: number,
    normalize?: boolean,
    position?: [number,number,number]
}

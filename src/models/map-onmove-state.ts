
export default interface OnStateChangeParameters {
    viewState: any;
    interactionState: {
        isDragging?: boolean;
        inTransition?: boolean;
        isPanning?: boolean;
        isRotating?: boolean;
        isZooming?: boolean;
    };
    oldViewState?: any,
    viewId: string;
}

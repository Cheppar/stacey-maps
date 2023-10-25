import UserInputs from "./user-inputs";

export default interface SliderProps {
    label: string;
    updateInputs(label: string, value: number): void;
    inputs: UserInputs;
    disabled: boolean;
    symbol?: string;
} 
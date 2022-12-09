export interface GlobalProps {
    text?: string;
    // textSize?: number;
    func: (props: any, state: any) => void;
    idfunc?: number;
    idUser?: string;
    email: string;
    pass: string;
    state: [React.Dispatch<React.SetStateAction<string>>, React.Dispatch<React.SetStateAction<boolean>>];
    errorText: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Login extends GlobalProps {
    textSize: number;
}

export interface Register extends GlobalProps {
    name?: string;
    date?: string;
    rePass?: string;
    arrayTexts: [''];
}

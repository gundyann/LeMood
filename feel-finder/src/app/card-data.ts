import {StyleAttribut} from './style-attribut';

export class CardData {

    title: string;
    feelings: string[];
    thoughts: string[];
    backgroundStyle: any;
    dotStyle: any;


    constructor(title: string) {
        this.title = title;
    }

    setFeelings(feelings: string[]) {
        this.feelings = feelings;
    }

    setThoughts(thoughts: string[]): void {
        this.thoughts = thoughts;
    }
    setBackgroundstyle(backgroundStyle: any): void {
        this.backgroundStyle = backgroundStyle;
    }
    setDotStyle(dotStyle: any): void {
        this.dotStyle = dotStyle;
    }
}



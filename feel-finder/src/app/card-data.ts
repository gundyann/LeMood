import {StyleAttribut} from './style-attribut';

export class CardData {

    title: string;
    feelings: string[];
    thoughts: string[];
    style: any;

    constructor(title: string) {
        this.title = title;
    }

    setFeelings(feelings: string[]) {
        this.feelings = feelings;
    }

    setThoughts(thoughts: string[]): void {
        this.thoughts = thoughts;
    }
    setStyle(style: any): void {
        this.style = style;
    }
}



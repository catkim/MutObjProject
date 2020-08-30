export class GetElements {
    constructor(selectMethod, parentElement) {
        this.selectMethod = selectMethod;
        this.parentElement = parentElement;
    }
    getElements() {
        switch (this.selectMethod) {
            case 'getElementById':
                return document.getElementById(this.parentElement);
        }
    }
}

export class GetElements {
  constructor(public selectMethod: string, public parentElement: string) {}
  getElements() {
    switch (this.selectMethod) {
      case 'getElementById':
        return document.getElementById(this.parentElement);
    }
  }
}

import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[NumberOnly]'
})
export class StrictNumberOnlyDirective {
	
  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home','ArrowLeft'];
  constructor(private elementRef: ElementRef) { }

  @Input() maxlength: number;
  @Input() min: number;
  @Input() max: number;

  /**
   * Key board action
   * @param event 
   */
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);
	
    if (inputValue && !String(inputValue).match(this.regex) || (this.maxlength && inputValue.length > this.maxlength) ||
      (this.min && +inputValue < this.min) ||
      (this.max && +inputValue >= this.max)) {
      event.preventDefault();
    }

    return;
  }

  /**
   * Copy Paste action 
   * @param event 
   */
  @HostListener('paste', ['$event']) onPaste(event) {
      const clipboardData = (event.originalEvent || event).clipboardData.getData('text/plain');
      if (clipboardData) {
          const regEx = new RegExp('^[0-9]*$');
          if(!regEx.test(clipboardData) || (this.maxlength && clipboardData.length > this.maxlength) ||
            (this.min && +clipboardData < this.min) ||
            (this.max && +clipboardData >= this.max)) {
              event.preventDefault();
          }
      }
      return;
  }
}
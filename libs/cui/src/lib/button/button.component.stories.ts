import { moduleMetadata } from '@storybook/angular';
import {ButtonComponent} from "./button.component";
export default {
    title: 'Base components/Button',
    decorators: [
        moduleMetadata({
            declarations: [ButtonComponent],
            imports: [],
        })
    ],
    parameters: {
        notes: {
            Description: `
Basic button component.
\`<cui-button color="primary" size="large" (doThings)="onDoThings">Click me</cui-button>\`
            `,
            Inputs:  `
## color
###### <code>**'primary'** | 'secondary' | 'accent'</code>
Sets the color of the button according to current theme.
## size
######<code>**'regular'** | 'block' | 'narrow'</code>
Sets the size of the button. Note that "block" spans the current _available_ width.
            `,
            Outputs:  `
## doThings
###### \`Observable<Action>\`
Emits an actions that bla bla bla.
            `
        }
    },
};
// Default button state
export const Regular = () => ({
    component: ButtonComponent,
    template: `
        <div style="display: flex; justify-content: space-evenly;">
            <div>
                <h5>Primary</h5>
                <cui-button (click)="onClick()" color="red" size="regular">Click me</cui-button>
            </div>
            <div>
                <h5>Secondary</h5>
                <cui-button (click)="onClick()" color="green" size="regular">Click me</cui-button>
            </div>
            <div>
                <h5>Accent</h5>
                <cui-button (click)="onClick()" color="blue" size="regular">Click me</cui-button>
            </div>
        </div>
    `
});
export const Narrow = () => ({
    component: ButtonComponent,
    template: `
        <div style="display: flex; justify-content: space-evenly;">
            <div>
                <h5>Primary</h5>
                <cui-button (click)="onClick()" color="red" size="narrow">Click me</cui-button>
            </div>
            <div>
                <h5>Secondary</h5>
                <cui-button (click)="onClick()" color="green" size="narrow">Click me</cui-button>
            </div>
            <div>
                <h5>Accent</h5>
                <cui-button (click)="onClick()" color="blue" size="narrow">Click me</cui-button>
            </div>
        </div>
    `
});
export const Block = () => ({
    component: ButtonComponent,
    template: `
        <div>
            <h5>Primary</h5>
            <cui-button (click)="onClick()" color="red" size="block">Click me</cui-button>
        </div>
        <div>
            <h5>Secondary</h5>
            <cui-button (click)="onClick()" color="green" size="block">Click me</cui-button>
        </div>
        <div>
            <h5>Accent</h5>
            <cui-button (click)="onClick()" color="blue" size="block">Click me</cui-button>
        </div>
    `
});

import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent'
}

export const primary = () => (
  {
  moduleMetadata: {
    imports: [],
    declarations: [ButtonComponent]
  },
  component: ButtonComponent,
  props: {
  },
  template: `
  <cui-button>A button</cui-button>
`,
})

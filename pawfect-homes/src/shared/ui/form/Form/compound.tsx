import { Form } from './form'
import { FormControl } from './form-control'
import { FormDescription } from './form-description'
import { FormField } from './form-field'
import { FormItem } from './form-item'
import { FormLabel } from './form-label'
import { FormMessage } from './form-message'

const FormCompound = Object.assign(Form, {
  Control: FormControl,
  Description: FormDescription,
  Field: FormField,
	Item: FormItem,
	Label: FormLabel,
	Message: FormMessage
})

export { FormCompound }
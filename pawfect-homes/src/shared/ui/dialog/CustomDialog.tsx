import { ReactNode } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './Dialog'

interface IProps {
	content?: ReactNode;
	trigger?: ReactNode;
	title?: string;
	description?: string;
	footer?: ReactNode;
}

export const CustomDialog = ({content, trigger, title, description, footer}: IProps)=>{
	return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle> {title} </DialogTitle>
          <DialogDescription> {description} </DialogDescription>
        </DialogHeader>
				{content}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            {/* <Button type="button" variant="secondary">
              Close
            </Button> */}
          </DialogClose>
					{footer}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
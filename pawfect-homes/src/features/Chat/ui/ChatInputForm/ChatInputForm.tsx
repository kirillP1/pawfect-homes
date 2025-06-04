"use client";

import { WebSocketConnectionStatus } from "../../model/types/types";
import { FormCompound, InputCompound } from "@/shared/ui/form";
import { useChatInputForm } from "../../model/hooks/useChatInputForm";
import { ChatFormInputs } from "../../model/types/shema";
import { Button, ButtonType } from "@/shared/ui/button";

interface IProps {
  sendMessage: (data: ChatFormInputs) => void;
  connectionStatus: WebSocketConnectionStatus;
  onSuccess?: () => void;
}

const ChatInputForm: React.FC<IProps> = ({
  sendMessage,
  connectionStatus,
  onSuccess,
}) => {
  const { form, onSubmit } = useChatInputForm({
    submit: sendMessage,
    onSuccess,
  });

  return (
    <FormCompound {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormCompound.Field
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormCompound.Item>
              <FormCompound.Control>
                <InputCompound.Group>
                  <InputCompound
                    placeholder="Type a message..."
                    disabled={connectionStatus !== "open"}
                    {...field}
                  />
                  <InputCompound.RightAddon>
                    <Button
                      type={ButtonType.SUBMIT}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                      disabled={connectionStatus !== "open"}
                    >
                      Send
                    </Button>
                  </InputCompound.RightAddon>
                </InputCompound.Group>
              </FormCompound.Control>
              <FormCompound.Message />
            </FormCompound.Item>
          )}
        />
      </form>
    </FormCompound>
  );
};

export default ChatInputForm;

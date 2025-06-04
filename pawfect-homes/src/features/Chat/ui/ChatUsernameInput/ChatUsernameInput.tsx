import { Dispatch, SetStateAction } from "react";
import { WebSocketConnectionStatus } from "../../model/types/types";
import { FormCompound, InputCompound } from "@/shared/ui/form";

interface IProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  connectionStatus: WebSocketConnectionStatus;
}

const ChatUsernameInput: React.FC<IProps> = ({
  username,
  setUsername,
  connectionStatus,
}) => {
  // TO-DO: Create React Hook Form
  return (
    <></>
    // <div>
    //   <FormCompound.Item>
    //     <FormCompound.Label className="block text-sm font-medium text-gray-700">
    //       Username
    //     </FormCompound.Label>
    //     <InputCompound.Group>
    //       <InputCompound
    //         type="text"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         className="mt-1 p-2 w-full border rounded"
    //         disabled={connectionStatus !== "open"}
    //       />
    //     </InputCompound.Group>
    //   </FormCompound.Item>
    // </div>
  );
};

export default ChatUsernameInput;

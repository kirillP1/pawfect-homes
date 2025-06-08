import { HTMLAttributes } from "react";
import { IUser } from "../../model/types";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  user: IUser;
  selected?: boolean; // add selected prop
}

const ChatUserCard: React.FC<IProps> = ({
  user,
  selected = false,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`p-4 border shadow-sm transition-shadow cursor-pointer w-[100%] ${
        selected
          ? "border-blue-500 bg-blue-100 shadow-md"
          : "border-gray-300 bg-white hover:shadow-md"
      }`}
      title={user.email}
    >
      <p
        className={`font-semibold ${
          selected ? "text-blue-700" : "text-gray-800"
        }`}
      >
        {user.email}
      </p>
    </div>
  );
};

export default ChatUserCard;

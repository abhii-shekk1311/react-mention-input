import { RefObject } from "react";

// Classnames object type
export interface IClassnames {
    mainContainerClass?: string;
    containerClass?: string;
    inputClass?: string;
    listContainerClass?: string;
    listClass?: string;
    listItemClass?: string;
}

// Dummy users data type
export interface IDummyUsers {
    id: any;
    name: string;
    profile_pic: string;
    [key: string]: any;
}
  
export interface IMentionsInputProps {
    users: IDummyUsers[];
    value: string;
    placeholder?: string;
    rows?: number;
    classNames?: IClassnames;
    textareaRef?: RefObject<HTMLTextAreaElement | null>;
    onChange: (value: string, mentions: IDummyUsers[]) => void;
}

// UsersList component props type
export interface IUsersListProps {
    usersList: IDummyUsers[];
    selectedIndex: number;
    listClass?: string;
    listItemClass?: string;
    handleMentionClick: (user: IDummyUsers) => void
}

// useUsersList component props type
export interface IUseUsersListProps {
    selectedIndex: number;
}

// dropdown position type
export interface IDropdownPos { 
    top: number, 
    left: number, 
    above?: boolean 
}
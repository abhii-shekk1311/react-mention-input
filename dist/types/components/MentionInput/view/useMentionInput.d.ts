import { ChangeEvent, KeyboardEvent } from 'react';
import { IUsers, IMentionsInputProps } from '../../../types/MyTypes';
declare const useMentionInput: (props: IMentionsInputProps) => {
    isMentioning: boolean;
    filteredUsers: IUsers[];
    selectedIndex: number;
    textareaRef: import("react").RefObject<HTMLTextAreaElement | null>;
    userListRef: import("react").RefObject<HTMLDivElement | null>;
    handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    handleMentionClick: (user: IUsers) => void;
    handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};
export default useMentionInput;

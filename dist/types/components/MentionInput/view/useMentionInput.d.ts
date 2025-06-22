import { ChangeEvent, KeyboardEvent } from 'react';
import { IDummyUsers, IMentionsInputProps } from '../../../types/MyTypes';
declare const useMentionInput: (props: IMentionsInputProps) => {
    isMentioning: boolean;
    filteredUsers: IDummyUsers[];
    selectedIndex: number;
    textareaRef: import("react").RefObject<HTMLTextAreaElement | null>;
    userListRef: import("react").RefObject<HTMLDivElement | null>;
    handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    handleMentionClick: (user: IDummyUsers) => void;
    handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => string | undefined;
};
export default useMentionInput;

import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { IDummyUsers, IMentionsInputProps } from '../../../types/MyTypes';

const useMentionInput = (props: IMentionsInputProps) => {
    const { users, value, onChange } = props;
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const userListRef = useRef<HTMLDivElement>(null);
    const [filteredUsers, setFilteredUsers] = useState<IDummyUsers[]>([]);
    const [mentionedUsers, setMentionedUsers] = useState<IDummyUsers[]>([]);
    const [isMentioning, setIsMentioning] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Closing users list if clicked outside of the input box
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                textareaRef.current &&
                userListRef.current &&
                !textareaRef.current.contains(target) &&
                !userListRef.current.contains(target)
            ) {
                setIsMentioning(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // Resetting value of selected user
    useEffect(() => {
        setSelectedIndex(0);
    }, [isMentioning]);

    // Handle Input Change
    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;

        const removedUsers: IDummyUsers[] = [];

        // Check for broken mentions
        mentionedUsers.forEach(user => {
            const escapedName = user.name.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
            const fullMentionPattern = new RegExp(`@${escapedName}\\b`, 'g');

            const matches = inputValue.match(fullMentionPattern);
            if (!matches || matches.length === 0) {
                // Remove any partial match starting with @ + first name
                // const firstName = user.name.split(' ')[0];
                // const partialMentionPattern = new RegExp(`@${firstName}[\\w\\s]*`, 'g');
                // inputValue = inputValue.replace(partialMentionPattern, '');
                removedUsers.push(user);
            }
        });

        // Normalize whitespace after partial removals
        // inputValue = inputValue.replace(/\s{2,}/g, ' ');

        // Clean up the mentioned users list
        const updatedMentionedUsers = mentionedUsers.filter(user => !removedUsers.includes(user));
        setMentionedUsers(updatedMentionedUsers);

        // Check if the user is typing a mention
        const lastWord = inputValue.split(/\s/).pop();
        if (lastWord?.startsWith('@')) {
            const query = lastWord.slice(1).toLowerCase();
            setFilteredUsers(users?.filter(user => user.name.toLowerCase().includes(query)) ?? []);
            setIsMentioning(true);
        } else {
            setIsMentioning(false);
        }

        onChange(inputValue, updatedMentionedUsers);
    };

    // Handle Key Down if user clicks down arrow key in textarea
    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (isMentioning && filteredUsers.length > 0) {
            if (e.key === 'ArrowDown' || e.code === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % filteredUsers.length);
            } else if (e.key === 'ArrowUp' || e.code === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) =>
                    prev === 0 ? filteredUsers.length - 1 : prev - 1
                );
            } else if (e.key === 'Enter' || e.code === 'Enter') {
                e.preventDefault();
                if (filteredUsers[selectedIndex]) {
                    handleMentionClick(filteredUsers[selectedIndex]);
                }
            }
        }
    }

    // Handle Mention User Click
    const handleMentionClick = (user: IDummyUsers) => {
        const cursorPos = textareaRef?.current?.selectionStart ?? 0;

        const before = value.slice(0, cursorPos).replace(/@\w*$/, `@${user.name}`);
        const after = value.slice(cursorPos);
        const newValue = `${before} ${after}`;

        // Prevent duplicate mentions
        const isAlreadyMentioned = mentionedUsers.some(u => u.name === user.name);
        const updatedMentionedUsers = isAlreadyMentioned
            ? mentionedUsers
            : [...mentionedUsers, user];
        setMentionedUsers(updatedMentionedUsers);
        onChange(newValue, updatedMentionedUsers);
        setIsMentioning(false);
    };


    return {
        isMentioning,
        filteredUsers,
        selectedIndex,
        textareaRef,
        userListRef,
        handleKeyDown,
        handleMentionClick,
        handleInputChange
    }
}

export default useMentionInput
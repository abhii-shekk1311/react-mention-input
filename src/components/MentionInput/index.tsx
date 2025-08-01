import { IMentionsInputProps } from "../../types/MyTypes";
import UsersList from "./UsersList";
import useMentionInput from "./view/useMentionInput";

const MentionInput: React.FC<IMentionsInputProps> = (props) => {
    const {
        users,
        classNames = {},
        placeholder = "Enter @ to mention",
        name = "mention-input",
        rows = 1,
        value,
        onChange
    } = props
    const {
        isMentioning,
        filteredUsers,
        selectedIndex,
        textareaRef,
        userListRef,
        handleKeyDown,
        handleMentionClick,
        handleInputChange
    } = useMentionInput({ users, value, onChange });
    const {
        mainContainerClass,
        containerClass,
        inputClass,
        listContainerClass,
        listClass,
        listItemClass,
    } = classNames;
    return (
        <div className={`${mainContainerClass ?? ""}`}>
            <div className={`${containerClass ?? ""} relative`}>
                <textarea
                    className={`${inputClass ?? ""} p-2 w-100 rounded-md border-1 border-b-gray-600 resize-none`}
                    ref={textareaRef}
                    name={name}
                    placeholder={placeholder}
                    rows={rows}
                    value={value ?? ""}
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                />

                {isMentioning
                    && (
                        <div
                            ref={userListRef}
                            className={`${listContainerClass ?? ""} top-12 w-100 left-0 absolute z-10`}
                        >
                            <UsersList
                                selectedIndex={selectedIndex}
                                listClass={listClass}
                                listItemClass={listItemClass}
                                usersList={filteredUsers}
                                handleMentionClick={handleMentionClick}
                            />
                        </div>
                    )}

            </div>
        </div>
    )
}

export default MentionInput
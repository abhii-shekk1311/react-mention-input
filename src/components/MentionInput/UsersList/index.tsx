import { IUsersListProps } from '../../../types/MyTypes'
import useUsersList from './view/useUsersList';

const UsersList = (props: IUsersListProps) => {
    const { usersList, listClass, listItemClass, selectedIndex, handleMentionClick } = props;
    const {
        itemRefs
    } = useUsersList({ selectedIndex })
    return (
        <ul className={`${listClass ?? ""} users-list shadow-2xl list-none rounded-2xl overflow-auto scrollbar-none max-h-60 min-w-60`}>
            {
                usersList?.map((user, index) => {
                    return (
                        <li
                            key={user?.id}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                            }}
                            className={`${listItemClass ?? ""} ${index === selectedIndex ? "bg-blue-100" : ""} users-list-item flex cursor-pointer items-center gap-x-4 border-b border-b-gray-200 hover:bg-blue-100 transition-all delay-100 p-3 over`}
                            onClick={() => handleMentionClick(user)}
                        >
                            <img className='rounded-full h-8 w-8' src={user?.profile_pic} alt='ProfilePic' />
                            <span>{user?.name}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default UsersList
import { useEffect, useRef } from 'react'
import { IUseUsersListProps } from '../../../../types/MyTypes';

const useUsersList = (props: IUseUsersListProps) => {
    const { selectedIndex } = props;
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const selectedItem = itemRefs.current[selectedIndex];
        if (selectedItem) {
            selectedItem.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }, [selectedIndex]);
    return {
        itemRefs
    }
}

export default useUsersList
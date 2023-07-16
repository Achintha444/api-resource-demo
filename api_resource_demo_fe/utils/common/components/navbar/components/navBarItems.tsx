import { NavBarItem } from '@/utils/common/models/navBar';
import { Button, Icon } from '@/utils/theme/muiLib';
import { navBarItems } from '../navBarItems';
import { Utils } from '@/utils/common/functions/utils';
import { icons } from '@/utils/theme/icons';


export interface NavBarItemsProps {
    allowedScopes: string[];
}

export default function NavBarItems(props: NavBarItemsProps): React.ReactNode {

    const { allowedScopes } = props;

    return (
        navBarItems.map((navBarItem: NavBarItem) => {
            const Icon = icons[navBarItem.icon];
            return Utils.hasRequiredScopes(allowedScopes, navBarItem.requiredScopes) &&
            (
                <>
                    <Button
                        key={navBarItem.key}
                        color='secondary'
                        href={navBarItem.path}
                        startIcon={<Icon />}
                    >
                        {navBarItem.name}
                    </Button>
                </>
            )
        }
        )
    );
}

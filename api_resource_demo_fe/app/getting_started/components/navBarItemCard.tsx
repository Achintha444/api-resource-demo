'use client';

import { Utils } from '@/utils/common/functions/utils';
import { ButtonBase, Card, CardContent, Container, Stack, SvgIconTypeMap, Typography } from '@/utils/theme/muiLib';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useSession } from 'next-auth/react';

interface NavBarItemProps {
    title: string;
    description: string;
    path: string;
    requiredScopes: string[];
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export default function NavBarItemCard(props: NavBarItemProps) {

    const { title, description, path, requiredScopes, Icon } = props;

    const session = useSession();

    const allowed = Utils.hasRequiredScopes(session.data?.scopes as string[], requiredScopes);

    return (
        <ButtonBase 
            className={!allowed ? 'nav-bar-items-disabled issue-card' : `issue-card`} 
            disabled={ !allowed }
            href={path
        }>
            <Card className='issue-card'>
                <CardContent className='issue-card-content'>
                    <Stack
                        justifyContent="center"
                        alignContent="center"
                        textAlign="center"
                        className='issue-card-content'
                        spacing={2}
                    >
                        <Container maxWidth="xl">
                            <Icon color='primary' />
                        </Container>
                        <Container>
                            <Typography variant="h5" component="div" gutterBottom color='primary'>
                                {title}
                            </Typography>
                            <Typography color="text.secondary">
                                {description}
                            </Typography>
                        </Container>
                    </Stack>
                </CardContent>
            </Card>
        </ButtonBase>
    )
}

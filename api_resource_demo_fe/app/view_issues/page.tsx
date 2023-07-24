import { FeatureConfig } from '@/feature_config/featureConfig';
import { asgardeoProviderOptions } from '@/utils/auth/authOptions';
import LoadingScreen from '@/utils/common/components/loading';
import NavBar from '@/utils/common/components/navbar/navBar';
import SessionCheckComponent from '@/utils/common/components/sessionCheckComponent';
import Title from '@/utils/common/components/title';
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@/utils/theme/muiLib';
import { Session, getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import IssueCard from './components/issueCard';
import { Issue } from '@/utils/common/models/issue';

async function getData() {
    const session: Session | null = await getServerSession(asgardeoProviderOptions);
    const res = await fetch(`${FeatureConfig.getBackendUrl()}/issues`,
        {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`
            }
        })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {

    const issueList: Issue[] = await getData();

    return (
        <SessionCheckComponent requiredScopes={FeatureConfig.features.issue.view}>
            <Container className='sub-item'>
                <NavBar />
                <Title title='View Issues' />
                <Grid container justifyContent='flex-start' alignItems='center' direction='column' spacing={5}>
                    {
                        issueList?.reverse().map((issue) =>
                            <IssueCard
                                key={issue.id}
                                issueId={issue.id}
                                issueTitle={issue.name}
                                issueDescription={issue.description}
                                gridItem={true}
                            />
                        )
                    }
                </Grid>
            </Container>
        </SessionCheckComponent>
    )
}

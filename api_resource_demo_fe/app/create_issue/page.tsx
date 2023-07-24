import { FeatureConfig } from '@/feature_config/featureConfig';
import NavBar from '@/utils/common/components/navbar/navBar';
import SessionCheckComponent from '@/utils/common/components/sessionCheckComponent';
import Title from '@/utils/common/components/title';
import { Container } from '@/utils/theme/muiLib';
import CreateIssueForm from './components/createIssueForm';

export default function Home() {

    return (
        <SessionCheckComponent requiredScopes={FeatureConfig.features.issue.create}>
            <Container className='sub-item'>
                <NavBar />
                <Title title='Create Issue' />
                <CreateIssueForm />
            </Container>
        </SessionCheckComponent>
    )
}

import Title from '@/utils/common/components/title';
import { Container, Box, Button, Card, CardActions, CardContent, Grid, Stack, TextField, Typography } from '@/utils/theme/muiLib';
import CreateIssueForm from './components/createIssueForm';
import NavBar from '@/utils/common/components/navbar/navBar';

export default function Home() {
    return (
        <Container className='sub-item'>
            <NavBar />
            <Title title='Create Issue' />
            <CreateIssueForm />
        </Container>
    )
}

import {Modal, useMantineTheme} from '@mantine/core';
import PostShare from '../postSahare/PostShare'

function ProfileModel({modalOpened, setModalOpened}) {
    const theme = useMantineTheme();
    return(
        <Modal overlayColor={theme.colorScheme === 'dark'? theme.colors.dark: theme.colors.g }   //ERR
        overlayOpacity={0.55}
        overlayBlur={3}
        size='55%'
        opened={modalOpened}
        onClose={()=> setModalOpened(false)}
        >
       <PostShare/>
        </Modal>
    )
}

export default ProfileModel
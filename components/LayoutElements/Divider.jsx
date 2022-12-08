
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';


const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

const DividerCustom = ({children}) => {
    return ( 
        <Root>
            <Divider className='divider'>
                <Typography variant='p' className='dividerText'>{children}</Typography>
            </Divider>
        </Root>
     );
}
 
export default DividerCustom;
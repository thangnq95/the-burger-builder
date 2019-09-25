import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'; 

import Tootbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Aux>
        <Tootbar/>
        <div>Tootbar , SideDrawer ,Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
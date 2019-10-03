import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrapComponent) => {
    return (props) => {
        return (
            <Aux>
                <Modal>
                    Something didn't work!.
                </Modal>
                <WrapComponent {...props} />
            </Aux>
        );
    }

}

export default withErrorHandler;

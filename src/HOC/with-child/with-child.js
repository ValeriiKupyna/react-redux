import React from 'react';

const withChild = (fn) => (Wrapper) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        );
    }
}

export default withChild;
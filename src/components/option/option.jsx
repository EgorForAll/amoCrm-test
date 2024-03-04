import * as React from 'react';

const Option = ({label, value}) => {
    return (
        <option value={value}>{label}</option>
    );
};

export default Option;
import PropTypes from 'prop-types';
import { Space, Spin } from 'antd';
export const SpinLoader = ({size}) => (
    <Space align="center" gap="middle">
        <Spin size={size} />
    </Space>
);

export const SmallSpin =()=><SpinLoader size="small"/> //use for loading text
export const MediumSpin =()=><SpinLoader size="default"/> //use for loading card-level
export const LargeSpin =()=><SpinLoader size="large"/> //use for loading a page

SpinLoader.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'large']).isRequired,
};
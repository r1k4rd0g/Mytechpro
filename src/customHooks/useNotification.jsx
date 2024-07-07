import React from 'react';
import { notification, Space, Button } from 'antd';
import PropTypes from 'prop-types';

export const NotificationBase = ({ type, message, description }) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Space>
                <Button type="primary" size="small" onClick={() => api.destroy(key)}>
                    Confirm
                </Button>
            </Space>
        );
        api.open({
            message: message,
            description: description,
            type: type,
            key,
            btn
        });
    };

    React.useEffect(() => {
        openNotification();
    }, []);

    return contextHolder;
};

NotificationBase.propTypes = {
    type: PropTypes.oneOf(['success', 'info', 'warning', 'error']).isRequired,
    message: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};


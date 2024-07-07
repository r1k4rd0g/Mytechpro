import {NotificationBase} from '../../customHooks/useNotification';
import PropTypes from 'prop-types';

export const SuccessNoti = ({ message, description }) => (
    <NotificationBase type="success" message={message} description={description} />
);

export const ErrorNoti = ({ message, description }) => (
    <NotificationBase type="error" message={message} description={description} />
);

// Validación de PropTypes para los componentes específicos
SuccessNoti.propTypes = {
    message: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

ErrorNoti.propTypes = {
    message: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
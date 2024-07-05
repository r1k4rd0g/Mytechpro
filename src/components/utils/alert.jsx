import { Alert } from 'antd';
import PropTypes from 'prop-types';
export const AlertBase = ({ text, type }) => (
    <>
        <Alert message={text} type={type} />
    </>
);
AlertBase.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'info', 'warning', 'error']).isRequired,
};

// Componentes específicos para cada tipo de alerta
export const SuccessAlert = ({ text }) => <AlertBase text={text} type="success" />;
export const InfoAlert = ({ text }) => <AlertBase text={text} type="info" />;
export const WarningAlert = ({ text }) => <AlertBase text={text} type="warning" />;
export const ErrorAlert = ({ text }) => <AlertBase text={text} type="error" />;

// Validación de PropTypes para los componentes específicos
SuccessAlert.propTypes = { text: PropTypes.string.isRequired };
InfoAlert.propTypes = { text: PropTypes.string.isRequired };
WarningAlert.propTypes = { text: PropTypes.string.isRequired };
ErrorAlert.propTypes = { text: PropTypes.string.isRequired };
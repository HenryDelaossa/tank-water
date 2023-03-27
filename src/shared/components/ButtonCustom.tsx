import { FC } from 'react';
import { Button, Spinner } from 'reactstrap';

const ButtonCustom: FC<any> = ({ children, loading, ...props }) => (
    <Button
        {...props}
    >
        {children}{
            loading && (
                <Spinner size="sm" className="btn-spinner" />
            )
        }
    </Button >
);
export default ButtonCustom;
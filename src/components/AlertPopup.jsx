import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';


export default function AlertPopup({toggle}) {
    const [showAlert, setShowAlert] = useState(false);

    // Set value each time value is changed
    useEffect(() => {
        setShowAlert(toggle)
    }, [toggle])


    if(!showAlert)
        return null;

    return (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            <p className="fs-4">Successfully created reservation</p>
        </Alert>
    )         
}
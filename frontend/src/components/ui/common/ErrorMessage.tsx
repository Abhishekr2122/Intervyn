import type React from "react"

interface ErrorMessageProps {
    errorMessage: string;
}


const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
    return (
        <p  className="text-sm text-red-500">
            {errorMessage}
        </p>
    )
}

export default ErrorMessage;
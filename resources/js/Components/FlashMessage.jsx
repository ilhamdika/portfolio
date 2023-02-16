export default function FlashMessage({ message, type }) {
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    );
}
export default function Spinner() {
    return (

        <div className="vault-loading" role="status">
            <span className="vault-loading__spinner" aria-hidden="true" />
            <p>Opening your games...</p>
        </div>
    );
}

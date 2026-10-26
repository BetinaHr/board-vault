export default function VaultStats({ total, owned, liked }) {
    return (
        <dl className="profile-stats">
            <div>
                <dt>Total games</dt>
                <dd>{total}</dd>
            </div>

            <div>
                <dt>Owned</dt>
                <dd>{owned}</dd>
            </div>

            <div>
                <dt>Liked</dt>
                <dd>{liked}</dd>
            </div>
        </dl>
    );
}
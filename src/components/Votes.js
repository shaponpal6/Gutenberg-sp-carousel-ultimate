const { useState } = wp.element;
const Votes = () => {
    const [votes, setVotes] = useState(0);
    const addVote = () => {
        setVotes(votes + 1);
    };
    return (
        <div>
            <h2>{votes} Votes</h2>
            <p>
                <button onClick={addVote}>Vote! Up</button>
            </p>
        </div>
    );
};
export default Votes;
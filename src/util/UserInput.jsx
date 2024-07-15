
export default function UserInput({userInput, changeHandle}) {
    return (
        <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="initialInvestment">initial Investment</label>
                <input 
                type="number" 
                name="initialInvestment"
                required
                value={userInput.initialInvestment}
                onChange={(events) => changeHandle("initialInvestment", events.target.value)}
                />
            </p>
            <p>
                <label htmlFor="annualInvestment">annual Investment</label>
                <input type="number" 
                name="annualInvestment"
                required
                value={userInput.annualInvestment}
                onChange={(events) => changeHandle("annualInvestment", events.target.value)}
                />
            </p>
            </div>
            <div className="input-group">
            <p>
                <label htmlFor="expectedReturn">expected return</label>
                <input type="number" 
                name="expectedReturn"
                required
                value={userInput.expectedReturn}
                onChange={(events) => changeHandle("expectedReturn", events.target.value)}
                />
            </p>
            <p>
                <label htmlFor="duration">duration</label>
                <input type="number" 
                name="duration"
                required
                value={userInput.duration}
                onChange={(events) => changeHandle("duration", events.target.value)}
                />
            </p>
            </div>
        </section>
    );
}
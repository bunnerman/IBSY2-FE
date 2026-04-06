const initialBalance = { balance: 1000, interest: 0 };

function bankReducer(state = initialBalance, action)
{
	switch(action.type)
	{
		case "DEPOSIT":
		{
			const newBalance = state.balance + 100
			const interest = newBalance * 0.10
			return { ...state, balance: newBalance + interest, interest: interest }
		}
		default: // fallback just in case
			return state
	}
}

export default bankReducer
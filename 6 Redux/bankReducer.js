const initialBalance = { balance: 0 };

function bankReducer(state = initialBalance, action)
{
	switch(action.type)
	{
		case "DEPOSIT":
			return { balance: state.balance + 100 }
		case "WITHDRAW":
			return { balance: state.balance - 50 }
		default: // fallback just in case
			return state
	}
}

export default bankReducer
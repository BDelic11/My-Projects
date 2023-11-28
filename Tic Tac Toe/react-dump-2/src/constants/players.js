const initialStatePlayers = {
    playerOne: {
        name: "",
        symbol: "X",
        score: 0,
        current: true,
        history : []
    },
    playerTwo: {
        name: "",
        symbol: "O",
        score: 0,
        current: false,
        history : []
    },
    set: false,
    win: false 
};

export default initialStatePlayers;
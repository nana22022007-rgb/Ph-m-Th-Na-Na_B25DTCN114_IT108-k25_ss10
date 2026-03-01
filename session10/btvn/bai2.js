const player={
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};
function addPerformanceScore(player) {
    let performance = (player.goals + player.assists)/player.matchesPlayed;
    performance = Number(performance.toFixed(2));
    player.performaneMatch = performance;
    player.isKeyPlayer = performance>=1;
    console.log(player);
    
}
addPerformanceScore(player);
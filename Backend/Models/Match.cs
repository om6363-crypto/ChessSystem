﻿namespace ChessSytem.Models
{
    public class Match
    {
        public int MatchId { get; set; }
        public int Player1Id { get; set; }
        public int Player2Id { get; set; }
        public DateTime MatchDate { get; set; }
        public string MatchLevel { get; set; }
        public int WinnerId { get; set; }
    }
}
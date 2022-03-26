import mongoose from 'mongoose';

const MatchesSchema = new mongoose.Schema({
  id: Number,
  team1: {
    score: Number,
    name: String
  },
  team2: {
    score: Number,
    name: String
  },
});

const Matches = mongoose.model('Matches', MatchesSchema);

export default Matches;
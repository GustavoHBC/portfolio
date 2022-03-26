import { Schema, Model, model, models } from 'mongoose';

interface PlayersInterface {
  name: string;
  seniority: string;
  description: string;
  image: string;
  gameId: number;
}

const PlayersSchema = new Schema({
  id: Number,
  name: String,
  seniority: String,
  description: String,
  image: String,
  gameId: Number
}, { timestamps: true });

export const Players: Model<PlayersInterface> = models.Players || model<PlayersInterface>('Players', PlayersSchema);
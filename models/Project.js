import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  technologies: [String],
  liveLink: String,
  githubLink: String,
  image: String // Optional - for a thumbnail
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);

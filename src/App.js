const mongoose = require('mongoose');
//connection creation and accessing r creating a new db
mongoose
  .connect('mongodb://localhost:27017/data1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection successfull...'))
  .catch((err) => console.log(err));

//schema
//A mongoose schema defines the structure of tbe element,
// default values,validators,etc..

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//mongoose model

const Playlist = new mongoose.model('Playlist', playlistSchema);

// create document or insert

const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: 'Node Js',
      ctype: 'Back End',
      videos: 33,
      author: 'Anuj Dhingra',
      active: true,
    });

    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();

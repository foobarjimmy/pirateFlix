import jsonfile from 'jsonfile';
import { uniqBy } from 'lodash';

const file = './.pirateflixrc';

export function get() {
  try {
    return jsonfile.readFileSync(file);
  } catch(e) {
    jsonfile.writeFileSync(file, {});
    return get();
  }
}

export async function saveMovie(movie) {
  const config = await get();
  const history = config.history || [];

  history.push(movie);
  jsonfile.writeFileSync(file, {
    ...config,
    history: uniqBy(history, 'name'),
  });
}

export async function deleteMovies() {
  const config = await get();
  const del = require('del');

  jsonfile.writeFileSync(file, {
    ...config,
    history: [],
  });

  del(['/tmp/torrent-stream/*'], {force: true}).then(paths => {
    console.log('Deleted files and folders:\n',paths.join('\n '));
  });
}

// Many libraries in the React ecosystem use the setImmediate() API (like react-native-reanimated), 
// which Next.js doesn't polyfill by default.
import 'setimmediate';

import { App } from 'app';

export default App;

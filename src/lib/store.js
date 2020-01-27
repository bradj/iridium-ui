import { writable } from 'svelte/store';
import Log from 'lib/log'

const activeSession = writable(false, () => {
    Log.info('Received session subscriber');
    
	return () => Log.info('No more session subscribers');
});

export default {
    activeSession
};
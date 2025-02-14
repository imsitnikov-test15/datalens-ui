import {useHotkeys} from 'react-hotkeys-hook';

import {META_KEY} from '../constants/misc';
import {getMetaKey} from '../utils';

/**
 * Binds hotkey via useHotkeys, but using correct meta key for current os
 */
export function useBindHotkey({
    key,
    handler,
    options,
}: {
    key: string[];
    handler: () => void;
    options: Record<string, string>;
}) {
    const fullKey = key.map((keyPart) => (keyPart === META_KEY ? getMetaKey() : keyPart)).join('+');

    useHotkeys(fullKey, handler, options);
}

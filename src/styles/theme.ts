import { DefaultTheme } from 'styled-components';

import { colors } from './abstracts/variables';

export const defaultTheme: DefaultTheme = {
    colors,
};

export interface ThemedProps {
    theme?: DefaultTheme;
}

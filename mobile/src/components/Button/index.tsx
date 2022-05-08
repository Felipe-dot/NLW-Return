import React from 'react';
import { theme } from '../../theme';
import { 
    Text, 
    TouchableOpacity, 
    TouchableOpacityProps,
    ActivityIndicator,
} 
    from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLoadind: boolean;

}

export function Button({ isLoadind, ...rest } : Props ) {
  return (
    <TouchableOpacity 
        style={styles.container}
        {...rest}
    >
        {
            isLoadind 
            ? 
            <ActivityIndicator
                color={theme.colors.text_on_brand_color}
            />
            :
            <Text style={styles.title}>
                Enviar Feedback
            </Text>
        }
    </TouchableOpacity>
  );
}
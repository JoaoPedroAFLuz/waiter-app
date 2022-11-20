import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
}

export function Button({
  children,
  onPress,
  disabled,
  isLoading,
}: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text weight="600" color="#fff">
          {children}
        </Text>
      )}
    </Container>
  );
}

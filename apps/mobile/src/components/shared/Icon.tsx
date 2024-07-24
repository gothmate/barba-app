import { Ionicons } from "@expo/vector-icons"

export interface IconProps {
  iconName: React.ComponentProps<typeof Ionicons>["name"]
  color?: string
  size?: number
}

export default function Icon(props: IconProps) {
  return <Ionicons name={props.iconName} size={props.size ?? 28} {...props} />
}

import type { StringInputProps } from 'sanity'
import { useFormValue } from 'sanity'

// https://github.com/sanity-io/sanity/issues/4095

export default function regulationTableInput(props: StringInputProps) {
  const document = useFormValue([])
  //@ts-ignore
  props.schemaType.options.list = props.schemaType.options.listGenerator({
    document,
    path: props.path,
  })
  return props.renderDefault(props)
}
